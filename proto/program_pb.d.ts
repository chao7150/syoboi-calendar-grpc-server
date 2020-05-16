// package: syobocal
// file: program.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Program extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    hasWork(): boolean;
    clearWork(): void;
    getWork(): Work | undefined;
    setWork(value?: Work): void;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): Channel | undefined;
    setChannel(value?: Channel): void;


    hasEpisode(): boolean;
    clearEpisode(): void;
    getEpisode(): Episode | undefined;
    setEpisode(value?: Episode): void;


    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getStartOffset(): number;
    setStartOffset(value: number): void;

    clearFlagList(): void;
    getFlagList(): Array<Flag>;
    setFlagList(value: Array<Flag>): void;
    addFlag(value: Flag, index?: number): Flag;

    getDeleted(): boolean;
    setDeleted(value: boolean): void;

    getWarn(): boolean;
    setWarn(value: boolean): void;

    getRevision(): number;
    setRevision(value: number): void;


    hasLastUpdate(): boolean;
    clearLastUpdate(): void;
    getLastUpdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastUpdate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getAllday(): boolean;
    setAllday(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Program.AsObject;
    static toObject(includeInstance: boolean, msg: Program): Program.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Program, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Program;
    static deserializeBinaryFromReader(message: Program, reader: jspb.BinaryReader): Program;
}

export namespace Program {
    export type AsObject = {
        id: number,
        work?: Work.AsObject,
        channel?: Channel.AsObject,
        episode?: Episode.AsObject,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        startOffset: number,
        flagList: Array<Flag>,
        deleted: boolean,
        warn: boolean,
        revision: number,
        lastUpdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        allday: boolean,
    }
}

export class Work extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;

    getShortTitle(): string;
    setShortTitle(value: string): void;

    getCategory(): Category;
    setCategory(value: Category): void;


    getUrlsMap(): jspb.Map<string, string>;
    clearUrlsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Work.AsObject;
    static toObject(includeInstance: boolean, msg: Work): Work.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Work, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Work;
    static deserializeBinaryFromReader(message: Work, reader: jspb.BinaryReader): Work;
}

export namespace Work {
    export type AsObject = {
        id: number,
        title: string,
        shortTitle: string,
        category: Category,

        urlsMap: Array<[string, string]>,
    }
}

export class Episode extends jspb.Message { 
    getCount(): number;
    setCount(value: number): void;

    getTitle(): string;
    setTitle(value: string): void;

    getComment(): string;
    setComment(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Episode.AsObject;
    static toObject(includeInstance: boolean, msg: Episode): Episode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Episode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Episode;
    static deserializeBinaryFromReader(message: Episode, reader: jspb.BinaryReader): Episode;
}

export namespace Episode {
    export type AsObject = {
        count: number,
        title: string,
        comment: string,
    }
}

export class Channel extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getGid(): number;
    setGid(value: number): void;

    getUrl(): string;
    setUrl(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
    export type AsObject = {
        id: number,
        name: string,
        gid: number,
        url: string,
    }
}

export enum Flag {
    ATTENTION = 0,
    NEW = 1,
    FINAL = 2,
    RERUN = 3,
}

export enum Category {
    OTHERS = 0,
    ANIME = 1,
    RADIO = 2,
    TV = 3,
    TOKUSATSU = 4,
    ANIME_RELATED = 5,
    MEMO = 6,
    OVA = 7,
    MOVIE = 8,
    ANIME_RERUN = 10,
}
