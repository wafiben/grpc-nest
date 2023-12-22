import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CasbinClient as _proto_CasbinClient, CasbinDefinition as _proto_CasbinDefinition } from './proto/Casbin';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  proto: {
    Array2DReply: MessageTypeDefinition
    ArrayReply: MessageTypeDefinition
    BoolReply: MessageTypeDefinition
    Casbin: SubtypeConstructor<typeof grpc.Client, _proto_CasbinClient> & { service: _proto_CasbinDefinition }
    EmptyReply: MessageTypeDefinition
    EmptyRequest: MessageTypeDefinition
    EnforceRequest: MessageTypeDefinition
    FilteredPolicyRequest: MessageTypeDefinition
    NewAdapterReply: MessageTypeDefinition
    NewAdapterRequest: MessageTypeDefinition
    NewEnforcerReply: MessageTypeDefinition
    NewEnforcerRequest: MessageTypeDefinition
    PermissionRequest: MessageTypeDefinition
    PolicyRequest: MessageTypeDefinition
    SimpleGetRequest: MessageTypeDefinition
    UserRoleRequest: MessageTypeDefinition
  }
}

