// Original file: /home/benjeddou/Desktop/casbin-server/proto/casbin.proto


export interface PermissionRequest {
  'enforcerHandler'?: (number);
  'user'?: (string);
  'permissions'?: (string)[];
  'domain'?: (string)[];
}

export interface PermissionRequest__Output {
  'enforcerHandler'?: (number);
  'user'?: (string);
  'permissions'?: (string)[];
  'domain'?: (string)[];
}
