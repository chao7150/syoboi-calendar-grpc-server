// package: syobocal
// file: syoboi_calendar.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as program_pb from "./program_pb";

export class SyoboiRequest extends jspb.Message { 

    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SyoboiRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SyoboiRequest): SyoboiRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SyoboiRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SyoboiRequest;
    static deserializeBinaryFromReader(message: SyoboiRequest, reader: jspb.BinaryReader): SyoboiRequest;
}

export namespace SyoboiRequest {
    export type AsObject = {
        start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        end?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SyoboiResponse extends jspb.Message { 
    clearProgramList(): void;
    getProgramList(): Array<program_pb.Program>;
    setProgramList(value: Array<program_pb.Program>): void;
    addProgram(value?: program_pb.Program, index?: number): program_pb.Program;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SyoboiResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SyoboiResponse): SyoboiResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SyoboiResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SyoboiResponse;
    static deserializeBinaryFromReader(message: SyoboiResponse, reader: jspb.BinaryReader): SyoboiResponse;
}

export namespace SyoboiResponse {
    export type AsObject = {
        programList: Array<program_pb.Program.AsObject>,
    }
}
