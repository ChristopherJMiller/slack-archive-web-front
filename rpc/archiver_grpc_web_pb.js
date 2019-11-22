/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./archiver_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ArchiverFrontendClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ArchiverFrontendPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Context,
 *   !proto.ChatMessage>}
 */
const methodDescriptor_ArchiverFrontend_GetChatMessages = new grpc.web.MethodDescriptor(
  '/ArchiverFrontend/GetChatMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Context,
  proto.ChatMessage,
  /** @param {!proto.Context} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChatMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Context,
 *   !proto.ChatMessage>}
 */
const methodInfo_ArchiverFrontend_GetChatMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ChatMessage,
  /** @param {!proto.Context} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.Context} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.ArchiverFrontendClient.prototype.getChatMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ArchiverFrontend/GetChatMessages',
      request,
      metadata || {},
      methodDescriptor_ArchiverFrontend_GetChatMessages);
};


/**
 * @param {!proto.Context} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.ArchiverFrontendPromiseClient.prototype.getChatMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ArchiverFrontend/GetChatMessages',
      request,
      metadata || {},
      methodDescriptor_ArchiverFrontend_GetChatMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ChatItem,
 *   !proto.Reaction>}
 */
const methodDescriptor_ArchiverFrontend_GetReactions = new grpc.web.MethodDescriptor(
  '/ArchiverFrontend/GetReactions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ChatItem,
  proto.Reaction,
  /** @param {!proto.ChatItem} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Reaction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ChatItem,
 *   !proto.Reaction>}
 */
const methodInfo_ArchiverFrontend_GetReactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Reaction,
  /** @param {!proto.ChatItem} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Reaction.deserializeBinary
);


/**
 * @param {!proto.ChatItem} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Reaction>}
 *     The XHR Node Readable Stream
 */
proto.ArchiverFrontendClient.prototype.getReactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ArchiverFrontend/GetReactions',
      request,
      metadata || {},
      methodDescriptor_ArchiverFrontend_GetReactions);
};


/**
 * @param {!proto.ChatItem} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Reaction>}
 *     The XHR Node Readable Stream
 */
proto.ArchiverFrontendPromiseClient.prototype.getReactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ArchiverFrontend/GetReactions',
      request,
      metadata || {},
      methodDescriptor_ArchiverFrontend_GetReactions);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ArchiverBackendClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ArchiverBackendPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


module.exports = proto;

