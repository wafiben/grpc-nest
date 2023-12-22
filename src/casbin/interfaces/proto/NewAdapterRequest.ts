// Original file: /home/benjeddou/Desktop/casbin-server/proto/casbin.proto


export interface NewAdapterRequest {
  'adapterName'?: (string);
  'driverName'?: (string);
  'connectString'?: (string);
  'dbSpecified'?: (boolean);
}

export interface NewAdapterRequest__Output {
  'adapterName'?: (string);
  'driverName'?: (string);
  'connectString'?: (string);
  'dbSpecified'?: (boolean);
}
