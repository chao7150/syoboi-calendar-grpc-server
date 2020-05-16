// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var syoboi_calendar_pb = require('./syoboi_calendar_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var program_pb = require('./program_pb.js');

function serialize_syobocal_SyoboiRequest(arg) {
  if (!(arg instanceof syoboi_calendar_pb.SyoboiRequest)) {
    throw new Error('Expected argument of type syobocal.SyoboiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_syobocal_SyoboiRequest(buffer_arg) {
  return syoboi_calendar_pb.SyoboiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_syobocal_SyoboiResponse(arg) {
  if (!(arg instanceof syoboi_calendar_pb.SyoboiResponse)) {
    throw new Error('Expected argument of type syobocal.SyoboiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_syobocal_SyoboiResponse(buffer_arg) {
  return syoboi_calendar_pb.SyoboiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SyoboiCalendarService = exports.SyoboiCalendarService = {
  getPrograms: {
    path: '/syobocal.SyoboiCalendar/GetPrograms',
    requestStream: false,
    responseStream: false,
    requestType: syoboi_calendar_pb.SyoboiRequest,
    responseType: syoboi_calendar_pb.SyoboiResponse,
    requestSerialize: serialize_syobocal_SyoboiRequest,
    requestDeserialize: deserialize_syobocal_SyoboiRequest,
    responseSerialize: serialize_syobocal_SyoboiResponse,
    responseDeserialize: deserialize_syobocal_SyoboiResponse,
  },
};

exports.SyoboiCalendarClient = grpc.makeGenericClientConstructor(SyoboiCalendarService);
