

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Array2DReply as _proto_Array2DReply, Array2DReply__Output as _proto_Array2DReply__Output } from '../proto/Array2DReply';
import type { ArrayReply as _proto_ArrayReply, ArrayReply__Output as _proto_ArrayReply__Output } from '../proto/ArrayReply';
import type { BoolReply as _proto_BoolReply, BoolReply__Output as _proto_BoolReply__Output } from '../proto/BoolReply';
import type { EmptyReply as _proto_EmptyReply, EmptyReply__Output as _proto_EmptyReply__Output } from '../proto/EmptyReply';
import type { EmptyRequest as _proto_EmptyRequest, EmptyRequest__Output as _proto_EmptyRequest__Output } from '../proto/EmptyRequest';
import type { EnforceRequest as _proto_EnforceRequest, EnforceRequest__Output as _proto_EnforceRequest__Output } from '../proto/EnforceRequest';
import type { FilteredPolicyRequest as _proto_FilteredPolicyRequest, FilteredPolicyRequest__Output as _proto_FilteredPolicyRequest__Output } from '../proto/FilteredPolicyRequest';
import type { NewAdapterReply as _proto_NewAdapterReply, NewAdapterReply__Output as _proto_NewAdapterReply__Output } from '../proto/NewAdapterReply';
import type { NewAdapterRequest as _proto_NewAdapterRequest, NewAdapterRequest__Output as _proto_NewAdapterRequest__Output } from '../proto/NewAdapterRequest';
import type { NewEnforcerReply as _proto_NewEnforcerReply, NewEnforcerReply__Output as _proto_NewEnforcerReply__Output } from '../proto/NewEnforcerReply';
import type { NewEnforcerRequest as _proto_NewEnforcerRequest, NewEnforcerRequest__Output as _proto_NewEnforcerRequest__Output } from '../proto/NewEnforcerRequest';
import type { PermissionRequest as _proto_PermissionRequest, PermissionRequest__Output as _proto_PermissionRequest__Output } from '../proto/PermissionRequest';
import type { PolicyRequest as _proto_PolicyRequest, PolicyRequest__Output as _proto_PolicyRequest__Output } from '../proto/PolicyRequest';
import type { SimpleGetRequest as _proto_SimpleGetRequest, SimpleGetRequest__Output as _proto_SimpleGetRequest__Output } from '../proto/SimpleGetRequest';
import type { UserRoleRequest as _proto_UserRoleRequest, UserRoleRequest__Output as _proto_UserRoleRequest__Output } from '../proto/UserRoleRequest';

export interface CasbinClient extends grpc.Client {
  AddGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  AddNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  AddNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  AddPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddPermissionForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddPermissionForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPermissionForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPermissionForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  AddPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  AddRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddRoleForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  AddRoleForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addRoleForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  addRoleForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  DeletePermission(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermission(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermission(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermission(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermission(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermission(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermission(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermission(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  DeletePermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermissionForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermissionForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  DeletePermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermissionsForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeletePermissionsForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionsForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deletePermissionsForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  DeleteRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  DeleteRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  DeleteRole(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  DeleteRole(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  deleteRole(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  
  DeleteRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteRoleForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteRoleForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRoleForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRoleForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  DeleteRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteRolesForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteRolesForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRolesForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteRolesForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  Enforce(argument: _proto_EnforceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  Enforce(argument: _proto_EnforceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  Enforce(argument: _proto_EnforceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  Enforce(argument: _proto_EnforceRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  enforce(argument: _proto_EnforceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  enforce(argument: _proto_EnforceRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  enforce(argument: _proto_EnforceRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  enforce(argument: _proto_EnforceRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  GetAllActions(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllActions(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllActions(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllActions(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllActions(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllActions(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllActions(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllActions(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllNamedActions(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedActions(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedActions(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedActions(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedActions(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedActions(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedActions(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedActions(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllNamedObjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedObjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedObjects(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedObjects(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedObjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedObjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedObjects(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedObjects(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllNamedRoles(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedRoles(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedRoles(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedRoles(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedRoles(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedRoles(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedRoles(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedRoles(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllNamedSubjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedSubjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedSubjects(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllNamedSubjects(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedSubjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedSubjects(argument: _proto_SimpleGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedSubjects(argument: _proto_SimpleGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllNamedSubjects(argument: _proto_SimpleGetRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllObjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllObjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllObjects(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllObjects(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllObjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllObjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllObjects(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllObjects(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllRoles(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllRoles(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllRoles(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllRoles(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllRoles(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllRoles(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllRoles(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllRoles(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetAllSubjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllSubjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllSubjects(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetAllSubjects(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllSubjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllSubjects(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllSubjects(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getAllSubjects(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetDomains(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetDomains(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetDomains(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetDomains(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getDomains(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getDomains(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getDomains(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getDomains(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetFilteredPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getFilteredPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetGroupingPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetGroupingPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetGroupingPolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetGroupingPolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getGroupingPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getGroupingPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getGroupingPolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getGroupingPolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetImplicitPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetImplicitPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetImplicitPermissionsForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetImplicitPermissionsForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getImplicitPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getImplicitPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getImplicitPermissionsForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getImplicitPermissionsForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetImplicitRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetImplicitRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetImplicitRolesForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetImplicitRolesForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getImplicitRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getImplicitRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getImplicitRolesForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getImplicitRolesForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetPermissionsForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetPermissionsForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPermissionsForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPermissionsForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPermissionsForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetPolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  GetPolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  getPolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_Array2DReply__Output>): grpc.ClientUnaryCall;
  
  GetRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetRolesForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetRolesForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getRolesForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getRolesForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getRolesForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  GetUsersForRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetUsersForRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetUsersForRole(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  GetUsersForRole(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getUsersForRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getUsersForRole(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getUsersForRole(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  getUsersForRole(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_ArrayReply__Output>): grpc.ClientUnaryCall;
  
  HasGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  HasNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  HasNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  HasPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasPermissionForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasPermissionForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPermissionForUser(argument: _proto_PermissionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPermissionForUser(argument: _proto_PermissionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPermissionForUser(argument: _proto_PermissionRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  HasPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  HasRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasRoleForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  HasRoleForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasRoleForUser(argument: _proto_UserRoleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasRoleForUser(argument: _proto_UserRoleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  hasRoleForUser(argument: _proto_UserRoleRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  LoadPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  LoadPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  LoadPolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  LoadPolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  loadPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  loadPolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  loadPolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  loadPolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  
  NewAdapter(argument: _proto_NewAdapterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  NewAdapter(argument: _proto_NewAdapterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  NewAdapter(argument: _proto_NewAdapterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  NewAdapter(argument: _proto_NewAdapterRequest, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  newAdapter(argument: _proto_NewAdapterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  newAdapter(argument: _proto_NewAdapterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  newAdapter(argument: _proto_NewAdapterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  newAdapter(argument: _proto_NewAdapterRequest, callback: grpc.requestCallback<_proto_NewAdapterReply__Output>): grpc.ClientUnaryCall;
  
  NewEnforcer(argument: _proto_NewEnforcerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  NewEnforcer(argument: _proto_NewEnforcerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  NewEnforcer(argument: _proto_NewEnforcerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  NewEnforcer(argument: _proto_NewEnforcerRequest, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  newEnforcer(argument: _proto_NewEnforcerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  newEnforcer(argument: _proto_NewEnforcerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  newEnforcer(argument: _proto_NewEnforcerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  newEnforcer(argument: _proto_NewEnforcerRequest, callback: grpc.requestCallback<_proto_NewEnforcerReply__Output>): grpc.ClientUnaryCall;
  
  RemoveFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemoveFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedGroupingPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemoveFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredNamedPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemoveFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveFilteredPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredPolicy(argument: _proto_FilteredPolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredPolicy(argument: _proto_FilteredPolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeFilteredPolicy(argument: _proto_FilteredPolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemoveGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemoveNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedGroupingPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedGroupingPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedGroupingPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemoveNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemoveNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedPolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedPolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removeNamedPolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  RemovePolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemovePolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemovePolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  RemovePolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removePolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removePolicy(argument: _proto_PolicyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removePolicy(argument: _proto_PolicyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  removePolicy(argument: _proto_PolicyRequest, callback: grpc.requestCallback<_proto_BoolReply__Output>): grpc.ClientUnaryCall;
  
  SavePolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  SavePolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  SavePolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  SavePolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  savePolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  savePolicy(argument: _proto_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  savePolicy(argument: _proto_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  savePolicy(argument: _proto_EmptyRequest, callback: grpc.requestCallback<_proto_EmptyReply__Output>): grpc.ClientUnaryCall;
  
}

export interface CasbinHandlers extends grpc.UntypedServiceImplementation {
  AddGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  AddNamedGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  AddNamedPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  AddPermissionForUser: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_BoolReply>;
  
  AddPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  AddRoleForUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_BoolReply>;
  
  DeletePermission: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_BoolReply>;
  
  DeletePermissionForUser: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_BoolReply>;
  
  DeletePermissionsForUser: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_BoolReply>;
  
  DeleteRole: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_EmptyReply>;
  
  DeleteRoleForUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_BoolReply>;
  
  DeleteRolesForUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_BoolReply>;
  
  DeleteUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_BoolReply>;
  
  Enforce: grpc.handleUnaryCall<_proto_EnforceRequest__Output, _proto_BoolReply>;
  
  GetAllActions: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_ArrayReply>;
  
  GetAllNamedActions: grpc.handleUnaryCall<_proto_SimpleGetRequest__Output, _proto_ArrayReply>;
  
  GetAllNamedObjects: grpc.handleUnaryCall<_proto_SimpleGetRequest__Output, _proto_ArrayReply>;
  
  GetAllNamedRoles: grpc.handleUnaryCall<_proto_SimpleGetRequest__Output, _proto_ArrayReply>;
  
  GetAllNamedSubjects: grpc.handleUnaryCall<_proto_SimpleGetRequest__Output, _proto_ArrayReply>;
  
  GetAllObjects: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_ArrayReply>;
  
  GetAllRoles: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_ArrayReply>;
  
  GetAllSubjects: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_ArrayReply>;
  
  GetDomains: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_ArrayReply>;
  
  GetFilteredGroupingPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_Array2DReply>;
  
  GetFilteredNamedGroupingPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_Array2DReply>;
  
  GetFilteredNamedPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_Array2DReply>;
  
  GetFilteredPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_Array2DReply>;
  
  GetGroupingPolicy: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_Array2DReply>;
  
  GetImplicitPermissionsForUser: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_Array2DReply>;
  
  GetImplicitRolesForUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_ArrayReply>;
  
  GetNamedGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_Array2DReply>;
  
  GetNamedPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_Array2DReply>;
  
  GetPermissionsForUser: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_Array2DReply>;
  
  GetPolicy: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_Array2DReply>;
  
  GetRolesForUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_ArrayReply>;
  
  GetUsersForRole: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_ArrayReply>;
  
  HasGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  HasNamedGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  HasNamedPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  HasPermissionForUser: grpc.handleUnaryCall<_proto_PermissionRequest__Output, _proto_BoolReply>;
  
  HasPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  HasRoleForUser: grpc.handleUnaryCall<_proto_UserRoleRequest__Output, _proto_BoolReply>;
  
  LoadPolicy: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_EmptyReply>;
  
  NewAdapter: grpc.handleUnaryCall<_proto_NewAdapterRequest__Output, _proto_NewAdapterReply>;
  
  NewEnforcer: grpc.handleUnaryCall<_proto_NewEnforcerRequest__Output, _proto_NewEnforcerReply>;
  
  RemoveFilteredGroupingPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_BoolReply>;
  
  RemoveFilteredNamedGroupingPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_BoolReply>;
  
  RemoveFilteredNamedPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_BoolReply>;
  
  RemoveFilteredPolicy: grpc.handleUnaryCall<_proto_FilteredPolicyRequest__Output, _proto_BoolReply>;
  
  RemoveGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  RemoveNamedGroupingPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  RemoveNamedPolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  RemovePolicy: grpc.handleUnaryCall<_proto_PolicyRequest__Output, _proto_BoolReply>;
  
  SavePolicy: grpc.handleUnaryCall<_proto_EmptyRequest__Output, _proto_EmptyReply>;
  
}

export interface CasbinDefinition extends grpc.ServiceDefinition {
  AddGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  AddNamedGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  AddNamedPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  AddPermissionForUser: MethodDefinition<_proto_PermissionRequest, _proto_BoolReply, _proto_PermissionRequest__Output, _proto_BoolReply__Output>
  AddPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  AddRoleForUser: MethodDefinition<_proto_UserRoleRequest, _proto_BoolReply, _proto_UserRoleRequest__Output, _proto_BoolReply__Output>
  DeletePermission: MethodDefinition<_proto_PermissionRequest, _proto_BoolReply, _proto_PermissionRequest__Output, _proto_BoolReply__Output>
  DeletePermissionForUser: MethodDefinition<_proto_PermissionRequest, _proto_BoolReply, _proto_PermissionRequest__Output, _proto_BoolReply__Output>
  DeletePermissionsForUser: MethodDefinition<_proto_PermissionRequest, _proto_BoolReply, _proto_PermissionRequest__Output, _proto_BoolReply__Output>
  DeleteRole: MethodDefinition<_proto_UserRoleRequest, _proto_EmptyReply, _proto_UserRoleRequest__Output, _proto_EmptyReply__Output>
  DeleteRoleForUser: MethodDefinition<_proto_UserRoleRequest, _proto_BoolReply, _proto_UserRoleRequest__Output, _proto_BoolReply__Output>
  DeleteRolesForUser: MethodDefinition<_proto_UserRoleRequest, _proto_BoolReply, _proto_UserRoleRequest__Output, _proto_BoolReply__Output>
  DeleteUser: MethodDefinition<_proto_UserRoleRequest, _proto_BoolReply, _proto_UserRoleRequest__Output, _proto_BoolReply__Output>
  Enforce: MethodDefinition<_proto_EnforceRequest, _proto_BoolReply, _proto_EnforceRequest__Output, _proto_BoolReply__Output>
  GetAllActions: MethodDefinition<_proto_EmptyRequest, _proto_ArrayReply, _proto_EmptyRequest__Output, _proto_ArrayReply__Output>
  GetAllNamedActions: MethodDefinition<_proto_SimpleGetRequest, _proto_ArrayReply, _proto_SimpleGetRequest__Output, _proto_ArrayReply__Output>
  GetAllNamedObjects: MethodDefinition<_proto_SimpleGetRequest, _proto_ArrayReply, _proto_SimpleGetRequest__Output, _proto_ArrayReply__Output>
  GetAllNamedRoles: MethodDefinition<_proto_SimpleGetRequest, _proto_ArrayReply, _proto_SimpleGetRequest__Output, _proto_ArrayReply__Output>
  GetAllNamedSubjects: MethodDefinition<_proto_SimpleGetRequest, _proto_ArrayReply, _proto_SimpleGetRequest__Output, _proto_ArrayReply__Output>
  GetAllObjects: MethodDefinition<_proto_EmptyRequest, _proto_ArrayReply, _proto_EmptyRequest__Output, _proto_ArrayReply__Output>
  GetAllRoles: MethodDefinition<_proto_EmptyRequest, _proto_ArrayReply, _proto_EmptyRequest__Output, _proto_ArrayReply__Output>
  GetAllSubjects: MethodDefinition<_proto_EmptyRequest, _proto_ArrayReply, _proto_EmptyRequest__Output, _proto_ArrayReply__Output>
  GetDomains: MethodDefinition<_proto_UserRoleRequest, _proto_ArrayReply, _proto_UserRoleRequest__Output, _proto_ArrayReply__Output>
  GetFilteredGroupingPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_Array2DReply, _proto_FilteredPolicyRequest__Output, _proto_Array2DReply__Output>
  GetFilteredNamedGroupingPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_Array2DReply, _proto_FilteredPolicyRequest__Output, _proto_Array2DReply__Output>
  GetFilteredNamedPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_Array2DReply, _proto_FilteredPolicyRequest__Output, _proto_Array2DReply__Output>
  GetFilteredPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_Array2DReply, _proto_FilteredPolicyRequest__Output, _proto_Array2DReply__Output>
  GetGroupingPolicy: MethodDefinition<_proto_EmptyRequest, _proto_Array2DReply, _proto_EmptyRequest__Output, _proto_Array2DReply__Output>
  GetImplicitPermissionsForUser: MethodDefinition<_proto_PermissionRequest, _proto_Array2DReply, _proto_PermissionRequest__Output, _proto_Array2DReply__Output>
  GetImplicitRolesForUser: MethodDefinition<_proto_UserRoleRequest, _proto_ArrayReply, _proto_UserRoleRequest__Output, _proto_ArrayReply__Output>
  GetNamedGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_Array2DReply, _proto_PolicyRequest__Output, _proto_Array2DReply__Output>
  GetNamedPolicy: MethodDefinition<_proto_PolicyRequest, _proto_Array2DReply, _proto_PolicyRequest__Output, _proto_Array2DReply__Output>
  GetPermissionsForUser: MethodDefinition<_proto_PermissionRequest, _proto_Array2DReply, _proto_PermissionRequest__Output, _proto_Array2DReply__Output>
  GetPolicy: MethodDefinition<_proto_EmptyRequest, _proto_Array2DReply, _proto_EmptyRequest__Output, _proto_Array2DReply__Output>
  GetRolesForUser: MethodDefinition<_proto_UserRoleRequest, _proto_ArrayReply, _proto_UserRoleRequest__Output, _proto_ArrayReply__Output>
  GetUsersForRole: MethodDefinition<_proto_UserRoleRequest, _proto_ArrayReply, _proto_UserRoleRequest__Output, _proto_ArrayReply__Output>
  HasGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  HasNamedGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  HasNamedPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  HasPermissionForUser: MethodDefinition<_proto_PermissionRequest, _proto_BoolReply, _proto_PermissionRequest__Output, _proto_BoolReply__Output>
  HasPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  HasRoleForUser: MethodDefinition<_proto_UserRoleRequest, _proto_BoolReply, _proto_UserRoleRequest__Output, _proto_BoolReply__Output>
  LoadPolicy: MethodDefinition<_proto_EmptyRequest, _proto_EmptyReply, _proto_EmptyRequest__Output, _proto_EmptyReply__Output>
  NewAdapter: MethodDefinition<_proto_NewAdapterRequest, _proto_NewAdapterReply, _proto_NewAdapterRequest__Output, _proto_NewAdapterReply__Output>
  NewEnforcer: MethodDefinition<_proto_NewEnforcerRequest, _proto_NewEnforcerReply, _proto_NewEnforcerRequest__Output, _proto_NewEnforcerReply__Output>
  RemoveFilteredGroupingPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_BoolReply, _proto_FilteredPolicyRequest__Output, _proto_BoolReply__Output>
  RemoveFilteredNamedGroupingPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_BoolReply, _proto_FilteredPolicyRequest__Output, _proto_BoolReply__Output>
  RemoveFilteredNamedPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_BoolReply, _proto_FilteredPolicyRequest__Output, _proto_BoolReply__Output>
  RemoveFilteredPolicy: MethodDefinition<_proto_FilteredPolicyRequest, _proto_BoolReply, _proto_FilteredPolicyRequest__Output, _proto_BoolReply__Output>
  RemoveGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  RemoveNamedGroupingPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  RemoveNamedPolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  RemovePolicy: MethodDefinition<_proto_PolicyRequest, _proto_BoolReply, _proto_PolicyRequest__Output, _proto_BoolReply__Output>
  SavePolicy: MethodDefinition<_proto_EmptyRequest, _proto_EmptyReply, _proto_EmptyRequest__Output, _proto_EmptyReply__Output>
}
