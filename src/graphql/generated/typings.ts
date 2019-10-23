/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Auth: { // root type
    token?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    _id?: string | null; // ID
    email?: string | null; // String
    firstName?: string | null; // String
    lastName?: string | null; // String
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Auth: { // field return type
    token: string | null; // String
  }
  Mutation: { // field return type
    logoutUser: NexusGenRootTypes['Auth'] | null; // Auth
    signInUser: NexusGenRootTypes['User'] | null; // User
    signUpUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    currentUser: NexusGenRootTypes['User'] | null; // User
    getAllUsers: NexusGenRootTypes['User'][] | null; // [User!]
    getUser: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    _id: string | null; // ID
    email: string | null; // String
    firstName: string | null; // String
    lastName: string | null; // String
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    signInUser: { // args
      email: string; // String!
      password: string; // String!
    }
    signUpUser: { // args
      email: string; // String!
      password: string; // String!
    }
  }
  Query: {
    getUser: { // args
      _id: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Auth" | "Mutation" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}