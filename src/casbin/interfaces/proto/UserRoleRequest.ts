// Original file: /home/benjeddou/Desktop/casbin-server/proto/casbin.proto


export interface UserRoleRequest {
  'enforcerHandler'?: (number);
  'user'?: (string);
  'role'?: (string);
  'domain'?: (string)[];
}

export interface UserRoleRequest__Output {
  'enforcerHandler'?: (number);
  'user'?: (string);
  'role'?: (string);
  'domain'?: (string)[];
}
