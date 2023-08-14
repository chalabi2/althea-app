import create from "zustand";
import {
  EmptyActiveValidator,
  MasterValidatorProps,
} from "../config/interfaces";
import { ValidatorsList } from "../components/InfoBar";

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
  activeValidators: ValidatorsList; // New entry
  setActiveValidator: (validator: MasterValidatorProps) => void;
  setActiveValidators: (validators: ValidatorsList) => void; 
}
const useValidatorModalStore = create<ModalState>((set) => ({
  currentModal: ValidatorModalType.NONE,
  open: (modal) => set({ currentModal: modal }),
  close: () => set({ currentModal: ValidatorModalType.NONE }),
  activeValidator: EmptyActiveValidator,
  activeValidators: [], 
  setActiveValidator: (validator: MasterValidatorProps) =>
    set({ activeValidator: validator }),
  setActiveValidators: (validators: ValidatorsList) => 
    set({ activeValidators: validators }), 
}));


export default useValidatorModalStore;
