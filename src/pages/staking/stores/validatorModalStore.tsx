import create from "zustand";
import {
  EmptyActiveValidator,
  MasterValidatorProps,
} from "../config/interfaces";

export enum ValidatorModalType {
  STAKE,
  AUTO_DELEGATE,
  CLAIM_REWARDS,
  NONE,
}
interface ModalState {
  currentModal: ValidatorModalType;
  open: (modal: ValidatorModalType) => void;
  close: () => void;
  activeValidator: MasterValidatorProps;
  activeValidators: MasterValidatorProps[]; // New entry
  setActiveValidator: (validator: MasterValidatorProps) => void;
  setActiveValidators: (validators: MasterValidatorProps[]) => void; 
}
const useValidatorModalStore = create<ModalState>((set) => ({
  currentModal: ValidatorModalType.NONE,
  open: (modal) => set({ currentModal: modal }),
  close: () => set({ currentModal: ValidatorModalType.NONE }),
  activeValidator: EmptyActiveValidator,
  activeValidators: [], // New entry
  setActiveValidator: (validator: MasterValidatorProps) =>
    set({ activeValidator: validator }),
  setActiveValidators: (validators: MasterValidatorProps[]) => 
    set({ activeValidators: validators }), // New entry
}));


export default useValidatorModalStore;
