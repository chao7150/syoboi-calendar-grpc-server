// package: syobocal
// file: syoboi_calendar.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as syoboi_calendar_pb from "./syoboi_calendar_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as program_pb from "./program_pb";

interface ISyoboiCalendarService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPrograms: ISyoboiCalendarService_IGetPrograms;
}

interface ISyoboiCalendarService_IGetPrograms extends grpc.MethodDefinition<syoboi_calendar_pb.SyoboiRequest, syoboi_calendar_pb.SyoboiResponse> {
    path: string; // "/syobocal.SyoboiCalendar/GetPrograms"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<syoboi_calendar_pb.SyoboiRequest>;
    requestDeserialize: grpc.deserialize<syoboi_calendar_pb.SyoboiRequest>;
    responseSerialize: grpc.serialize<syoboi_calendar_pb.SyoboiResponse>;
    responseDeserialize: grpc.deserialize<syoboi_calendar_pb.SyoboiResponse>;
}

export const SyoboiCalendarService: ISyoboiCalendarService;

export interface ISyoboiCalendarServer {
    getPrograms: grpc.handleUnaryCall<syoboi_calendar_pb.SyoboiRequest, syoboi_calendar_pb.SyoboiResponse>;
}

export interface ISyoboiCalendarClient {
    getPrograms(request: syoboi_calendar_pb.SyoboiRequest, callback: (error: grpc.ServiceError | null, response: syoboi_calendar_pb.SyoboiResponse) => void): grpc.ClientUnaryCall;
    getPrograms(request: syoboi_calendar_pb.SyoboiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: syoboi_calendar_pb.SyoboiResponse) => void): grpc.ClientUnaryCall;
    getPrograms(request: syoboi_calendar_pb.SyoboiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: syoboi_calendar_pb.SyoboiResponse) => void): grpc.ClientUnaryCall;
}

export class SyoboiCalendarClient extends grpc.Client implements ISyoboiCalendarClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPrograms(request: syoboi_calendar_pb.SyoboiRequest, callback: (error: grpc.ServiceError | null, response: syoboi_calendar_pb.SyoboiResponse) => void): grpc.ClientUnaryCall;
    public getPrograms(request: syoboi_calendar_pb.SyoboiRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: syoboi_calendar_pb.SyoboiResponse) => void): grpc.ClientUnaryCall;
    public getPrograms(request: syoboi_calendar_pb.SyoboiRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: syoboi_calendar_pb.SyoboiResponse) => void): grpc.ClientUnaryCall;
}
