/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/base/v1beta1/coin.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.v1beta1 {
  export class Coin extends pb_1.Message {
    constructor(
      data?:
        | any[]
        | {
            denom?: string;
            amount?: string;
          }
    ) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
        if ("denom" in data && data.denom != undefined) {
          this.denom = data.denom;
        }
        if ("amount" in data && data.amount != undefined) {
          this.amount = data.amount;
        }
      }
    }
    get denom() {
      return pb_1.Message.getField(this, 1) as string;
    }
    set denom(value: string) {
      pb_1.Message.setField(this, 1, value);
    }
    get amount() {
      return pb_1.Message.getField(this, 2) as string;
    }
    set amount(value: string) {
      pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: { denom?: string; amount?: string }) {
      const message = new Coin({});
      if (data.denom != null) {
        message.denom = data.denom;
      }
      if (data.amount != null) {
        message.amount = data.amount;
      }
      return message;
    }
    toObject() {
      const data: {
        denom?: string;
        amount?: string;
      } = {};
      if (this.denom != null) {
        data.denom = this.denom;
      }
      if (this.amount != null) {
        data.amount = this.amount;
      }
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (typeof this.denom === "string" && this.denom.length)
        writer.writeString(1, this.denom);
      if (typeof this.amount === "string" && this.amount.length)
        writer.writeString(2, this.amount);
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Coin {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new Coin();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          case 1:
            message.denom = reader.readString();
            break;
          case 2:
            message.amount = reader.readString();
            break;
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Coin {
      return Coin.deserialize(bytes);
    }
  }
  export class DecCoin extends pb_1.Message {
    constructor(
      data?:
        | any[]
        | {
            denom?: string;
            amount?: string;
          }
    ) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
        if ("denom" in data && data.denom != undefined) {
          this.denom = data.denom;
        }
        if ("amount" in data && data.amount != undefined) {
          this.amount = data.amount;
        }
      }
    }
    get denom() {
      return pb_1.Message.getField(this, 1) as string;
    }
    set denom(value: string) {
      pb_1.Message.setField(this, 1, value);
    }
    get amount() {
      return pb_1.Message.getField(this, 2) as string;
    }
    set amount(value: string) {
      pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: { denom?: string; amount?: string }) {
      const message = new DecCoin({});
      if (data.denom != null) {
        message.denom = data.denom;
      }
      if (data.amount != null) {
        message.amount = data.amount;
      }
      return message;
    }
    toObject() {
      const data: {
        denom?: string;
        amount?: string;
      } = {};
      if (this.denom != null) {
        data.denom = this.denom;
      }
      if (this.amount != null) {
        data.amount = this.amount;
      }
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (typeof this.denom === "string" && this.denom.length)
        writer.writeString(1, this.denom);
      if (typeof this.amount === "string" && this.amount.length)
        writer.writeString(2, this.amount);
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DecCoin {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new DecCoin();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          case 1:
            message.denom = reader.readString();
            break;
          case 2:
            message.amount = reader.readString();
            break;
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DecCoin {
      return DecCoin.deserialize(bytes);
    }
  }
  export class IntProto extends pb_1.Message {
    constructor(
      data?:
        | any[]
        | {
            int?: string;
          }
    ) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
        if ("int" in data && data.int != undefined) {
          this.int = data.int;
        }
      }
    }
    get int() {
      return pb_1.Message.getField(this, 1) as string;
    }
    set int(value: string) {
      pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: { int?: string }) {
      const message = new IntProto({});
      if (data.int != null) {
        message.int = data.int;
      }
      return message;
    }
    toObject() {
      const data: {
        int?: string;
      } = {};
      if (this.int != null) {
        data.int = this.int;
      }
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (typeof this.int === "string" && this.int.length)
        writer.writeString(1, this.int);
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IntProto {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new IntProto();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          case 1:
            message.int = reader.readString();
            break;
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): IntProto {
      return IntProto.deserialize(bytes);
    }
  }
  export class DecProto extends pb_1.Message {
    constructor(
      data?:
        | any[]
        | {
            dec?: string;
          }
    ) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
        if ("dec" in data && data.dec != undefined) {
          this.dec = data.dec;
        }
      }
    }
    get dec() {
      return pb_1.Message.getField(this, 1) as string;
    }
    set dec(value: string) {
      pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: { dec?: string }) {
      const message = new DecProto({});
      if (data.dec != null) {
        message.dec = data.dec;
      }
      return message;
    }
    toObject() {
      const data: {
        dec?: string;
      } = {};
      if (this.dec != null) {
        data.dec = this.dec;
      }
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (typeof this.dec === "string" && this.dec.length)
        writer.writeString(1, this.dec);
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DecProto {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new DecProto();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          case 1:
            message.dec = reader.readString();
            break;
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DecProto {
      return DecProto.deserialize(bytes);
    }
  }
}
