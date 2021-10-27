import client from "src/apollo-client";
import type {
        ApolloQueryResult, ObservableQuery, QueryOptions, MutationOptions, SubscriptionOptions
      } from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag"
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type ItemGroupInput = {
  name?: Maybe<Scalars['String']>;
  parent_group_id?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ItemGroups = {
  __typename?: 'ItemGroups';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  parent_group_id: Scalars['Int'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ItemGroupsAggregator = {
  __typename?: 'ItemGroupsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ItemGroupsAggregatorSum>;
  avg?: Maybe<ItemGroupsAggregatorAvg>;
  min?: Maybe<ItemGroupsAggregatorMin>;
  max?: Maybe<ItemGroupsAggregatorMax>;
};

export type ItemGroupsAggregatorAvg = {
  __typename?: 'ItemGroupsAggregatorAvg';
  parent_group_id?: Maybe<Scalars['Float']>;
};

export type ItemGroupsAggregatorMax = {
  __typename?: 'ItemGroupsAggregatorMax';
  parent_group_id?: Maybe<Scalars['Float']>;
};

export type ItemGroupsAggregatorMin = {
  __typename?: 'ItemGroupsAggregatorMin';
  parent_group_id?: Maybe<Scalars['Float']>;
};

export type ItemGroupsAggregatorSum = {
  __typename?: 'ItemGroupsAggregatorSum';
  parent_group_id?: Maybe<Scalars['Float']>;
};

export type ItemGroupsConnection = {
  __typename?: 'ItemGroupsConnection';
  values?: Maybe<Array<Maybe<ItemGroups>>>;
  groupBy?: Maybe<ItemGroupsGroupBy>;
  aggregate?: Maybe<ItemGroupsAggregator>;
};

export type ItemGroupsConnectionCreated_At = {
  __typename?: 'ItemGroupsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemGroupsConnection>;
};

export type ItemGroupsConnectionId = {
  __typename?: 'ItemGroupsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemGroupsConnection>;
};

export type ItemGroupsConnectionName = {
  __typename?: 'ItemGroupsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemGroupsConnection>;
};

export type ItemGroupsConnectionParent_Group_Id = {
  __typename?: 'ItemGroupsConnectionParent_group_id';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ItemGroupsConnection>;
};

export type ItemGroupsConnectionPublished_At = {
  __typename?: 'ItemGroupsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemGroupsConnection>;
};

export type ItemGroupsConnectionUpdated_At = {
  __typename?: 'ItemGroupsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemGroupsConnection>;
};

export type ItemGroupsGroupBy = {
  __typename?: 'ItemGroupsGroupBy';
  id?: Maybe<Array<Maybe<ItemGroupsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ItemGroupsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ItemGroupsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ItemGroupsConnectionName>>>;
  parent_group_id?: Maybe<Array<Maybe<ItemGroupsConnectionParent_Group_Id>>>;
  published_at?: Maybe<Array<Maybe<ItemGroupsConnectionPublished_At>>>;
};

export type ItemInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  item_picture?: Maybe<Scalars['ID']>;
  item_group?: Maybe<Scalars['ID']>;
  prices?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ItemPictureInput = {
  pictures?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ItemPictures = {
  __typename?: 'ItemPictures';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  published_at?: Maybe<Scalars['DateTime']>;
  pictures?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ItemPicturesPicturesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ItemPicturesAggregator = {
  __typename?: 'ItemPicturesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ItemPicturesConnection = {
  __typename?: 'ItemPicturesConnection';
  values?: Maybe<Array<Maybe<ItemPictures>>>;
  groupBy?: Maybe<ItemPicturesGroupBy>;
  aggregate?: Maybe<ItemPicturesAggregator>;
};

export type ItemPicturesConnectionCreated_At = {
  __typename?: 'ItemPicturesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemPicturesConnection>;
};

export type ItemPicturesConnectionId = {
  __typename?: 'ItemPicturesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemPicturesConnection>;
};

export type ItemPicturesConnectionPublished_At = {
  __typename?: 'ItemPicturesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemPicturesConnection>;
};

export type ItemPicturesConnectionUpdated_At = {
  __typename?: 'ItemPicturesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemPicturesConnection>;
};

export type ItemPicturesGroupBy = {
  __typename?: 'ItemPicturesGroupBy';
  id?: Maybe<Array<Maybe<ItemPicturesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ItemPicturesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ItemPicturesConnectionUpdated_At>>>;
  published_at?: Maybe<Array<Maybe<ItemPicturesConnectionPublished_At>>>;
};

export type Items = {
  __typename?: 'Items';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  item_picture?: Maybe<ItemPictures>;
  item_group?: Maybe<ItemGroups>;
  published_at?: Maybe<Scalars['DateTime']>;
  prices?: Maybe<Array<Maybe<Prices>>>;
};


export type ItemsPricesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ItemsAggregator = {
  __typename?: 'ItemsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  values?: Maybe<Array<Maybe<Items>>>;
  groupBy?: Maybe<ItemsGroupBy>;
  aggregate?: Maybe<ItemsAggregator>;
};

export type ItemsConnectionCreated_At = {
  __typename?: 'ItemsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionDescription = {
  __typename?: 'ItemsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionId = {
  __typename?: 'ItemsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionItem_Group = {
  __typename?: 'ItemsConnectionItem_group';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionItem_Picture = {
  __typename?: 'ItemsConnectionItem_picture';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionName = {
  __typename?: 'ItemsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionPublished_At = {
  __typename?: 'ItemsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsConnectionUpdated_At = {
  __typename?: 'ItemsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemsConnection>;
};

export type ItemsGroupBy = {
  __typename?: 'ItemsGroupBy';
  id?: Maybe<Array<Maybe<ItemsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ItemsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ItemsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ItemsConnectionName>>>;
  description?: Maybe<Array<Maybe<ItemsConnectionDescription>>>;
  item_picture?: Maybe<Array<Maybe<ItemsConnectionItem_Picture>>>;
  item_group?: Maybe<Array<Maybe<ItemsConnectionItem_Group>>>;
  published_at?: Maybe<Array<Maybe<ItemsConnectionPublished_At>>>;
};



export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ItemGroups | ItemGroupsConnection | ItemGroupsAggregator | ItemGroupsAggregatorSum | ItemGroupsAggregatorAvg | ItemGroupsAggregatorMin | ItemGroupsAggregatorMax | ItemGroupsGroupBy | ItemGroupsConnectionId | ItemGroupsConnectionCreated_At | ItemGroupsConnectionUpdated_At | ItemGroupsConnectionName | ItemGroupsConnectionParent_Group_Id | ItemGroupsConnectionPublished_At | CreateItemGroupPayload | UpdateItemGroupPayload | DeleteItemGroupPayload | ItemPictures | ItemPicturesConnection | ItemPicturesAggregator | ItemPicturesGroupBy | ItemPicturesConnectionId | ItemPicturesConnectionCreated_At | ItemPicturesConnectionUpdated_At | ItemPicturesConnectionPublished_At | CreateItemPicturePayload | UpdateItemPicturePayload | DeleteItemPicturePayload | Items | ItemsConnection | ItemsAggregator | ItemsGroupBy | ItemsConnectionId | ItemsConnectionCreated_At | ItemsConnectionUpdated_At | ItemsConnectionName | ItemsConnectionDescription | ItemsConnectionItem_Picture | ItemsConnectionItem_Group | ItemsConnectionPublished_At | CreateItemPayload | UpdateItemPayload | DeleteItemPayload | PriceTypes | PriceTypesConnection | PriceTypesAggregator | PriceTypesGroupBy | PriceTypesConnectionId | PriceTypesConnectionCreated_At | PriceTypesConnectionUpdated_At | PriceTypesConnectionName | PriceTypesConnectionPublished_At | CreatePriceTypePayload | UpdatePriceTypePayload | DeletePriceTypePayload | Prices | PricesConnection | PricesAggregator | PricesAggregatorSum | PricesAggregatorAvg | PricesAggregatorMin | PricesAggregatorMax | PricesGroupBy | PricesConnectionId | PricesConnectionCreated_At | PricesConnectionUpdated_At | PricesConnectionPrice | PricesConnectionPrice_Type | PricesConnectionPublished_At | CreatePricePayload | UpdatePricePayload | DeletePricePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createItemGroup?: Maybe<CreateItemGroupPayload>;
  updateItemGroup?: Maybe<UpdateItemGroupPayload>;
  deleteItemGroup?: Maybe<DeleteItemGroupPayload>;
  createItemPicture?: Maybe<CreateItemPicturePayload>;
  updateItemPicture?: Maybe<UpdateItemPicturePayload>;
  deleteItemPicture?: Maybe<DeleteItemPicturePayload>;
  createItem?: Maybe<CreateItemPayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  deleteItem?: Maybe<DeleteItemPayload>;
  createPriceType?: Maybe<CreatePriceTypePayload>;
  updatePriceType?: Maybe<UpdatePriceTypePayload>;
  deletePriceType?: Maybe<DeletePriceTypePayload>;
  createPrice?: Maybe<CreatePricePayload>;
  updatePrice?: Maybe<UpdatePricePayload>;
  deletePrice?: Maybe<DeletePricePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateItemGroupArgs = {
  input?: Maybe<CreateItemGroupInput>;
};


export type MutationUpdateItemGroupArgs = {
  input?: Maybe<UpdateItemGroupInput>;
};


export type MutationDeleteItemGroupArgs = {
  input?: Maybe<DeleteItemGroupInput>;
};


export type MutationCreateItemPictureArgs = {
  input?: Maybe<CreateItemPictureInput>;
};


export type MutationUpdateItemPictureArgs = {
  input?: Maybe<UpdateItemPictureInput>;
};


export type MutationDeleteItemPictureArgs = {
  input?: Maybe<DeleteItemPictureInput>;
};


export type MutationCreateItemArgs = {
  input?: Maybe<CreateItemInput>;
};


export type MutationUpdateItemArgs = {
  input?: Maybe<UpdateItemInput>;
};


export type MutationDeleteItemArgs = {
  input?: Maybe<DeleteItemInput>;
};


export type MutationCreatePriceTypeArgs = {
  input?: Maybe<CreatePriceTypeInput>;
};


export type MutationUpdatePriceTypeArgs = {
  input?: Maybe<UpdatePriceTypeInput>;
};


export type MutationDeletePriceTypeArgs = {
  input?: Maybe<DeletePriceTypeInput>;
};


export type MutationCreatePriceArgs = {
  input?: Maybe<CreatePriceInput>;
};


export type MutationUpdatePriceArgs = {
  input?: Maybe<UpdatePriceInput>;
};


export type MutationDeletePriceArgs = {
  input?: Maybe<DeletePriceInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type PriceInput = {
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PriceTypeInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PriceTypes = {
  __typename?: 'PriceTypes';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PriceTypesAggregator = {
  __typename?: 'PriceTypesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PriceTypesConnection = {
  __typename?: 'PriceTypesConnection';
  values?: Maybe<Array<Maybe<PriceTypes>>>;
  groupBy?: Maybe<PriceTypesGroupBy>;
  aggregate?: Maybe<PriceTypesAggregator>;
};

export type PriceTypesConnectionCreated_At = {
  __typename?: 'PriceTypesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceTypesConnection>;
};

export type PriceTypesConnectionId = {
  __typename?: 'PriceTypesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PriceTypesConnection>;
};

export type PriceTypesConnectionName = {
  __typename?: 'PriceTypesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PriceTypesConnection>;
};

export type PriceTypesConnectionPublished_At = {
  __typename?: 'PriceTypesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceTypesConnection>;
};

export type PriceTypesConnectionUpdated_At = {
  __typename?: 'PriceTypesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceTypesConnection>;
};

export type PriceTypesGroupBy = {
  __typename?: 'PriceTypesGroupBy';
  id?: Maybe<Array<Maybe<PriceTypesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PriceTypesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PriceTypesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<PriceTypesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<PriceTypesConnectionPublished_At>>>;
};

export type Prices = {
  __typename?: 'Prices';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<PriceTypes>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PricesAggregator = {
  __typename?: 'PricesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PricesAggregatorSum>;
  avg?: Maybe<PricesAggregatorAvg>;
  min?: Maybe<PricesAggregatorMin>;
  max?: Maybe<PricesAggregatorMax>;
};

export type PricesAggregatorAvg = {
  __typename?: 'PricesAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
};

export type PricesAggregatorMax = {
  __typename?: 'PricesAggregatorMax';
  price?: Maybe<Scalars['Float']>;
};

export type PricesAggregatorMin = {
  __typename?: 'PricesAggregatorMin';
  price?: Maybe<Scalars['Float']>;
};

export type PricesAggregatorSum = {
  __typename?: 'PricesAggregatorSum';
  price?: Maybe<Scalars['Float']>;
};

export type PricesConnection = {
  __typename?: 'PricesConnection';
  values?: Maybe<Array<Maybe<Prices>>>;
  groupBy?: Maybe<PricesGroupBy>;
  aggregate?: Maybe<PricesAggregator>;
};

export type PricesConnectionCreated_At = {
  __typename?: 'PricesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PricesConnection>;
};

export type PricesConnectionId = {
  __typename?: 'PricesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricesConnection>;
};

export type PricesConnectionPrice = {
  __typename?: 'PricesConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<PricesConnection>;
};

export type PricesConnectionPrice_Type = {
  __typename?: 'PricesConnectionPrice_type';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PricesConnection>;
};

export type PricesConnectionPublished_At = {
  __typename?: 'PricesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PricesConnection>;
};

export type PricesConnectionUpdated_At = {
  __typename?: 'PricesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PricesConnection>;
};

export type PricesGroupBy = {
  __typename?: 'PricesGroupBy';
  id?: Maybe<Array<Maybe<PricesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PricesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PricesConnectionUpdated_At>>>;
  price?: Maybe<Array<Maybe<PricesConnectionPrice>>>;
  price_type?: Maybe<Array<Maybe<PricesConnectionPrice_Type>>>;
  published_at?: Maybe<Array<Maybe<PricesConnectionPublished_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  itemGroup?: Maybe<ItemGroups>;
  itemGroups?: Maybe<Array<Maybe<ItemGroups>>>;
  itemGroupsConnection?: Maybe<ItemGroupsConnection>;
  itemPicture?: Maybe<ItemPictures>;
  itemPictures?: Maybe<Array<Maybe<ItemPictures>>>;
  itemPicturesConnection?: Maybe<ItemPicturesConnection>;
  item?: Maybe<Items>;
  items?: Maybe<Array<Maybe<Items>>>;
  itemsConnection?: Maybe<ItemsConnection>;
  priceType?: Maybe<PriceTypes>;
  priceTypes?: Maybe<Array<Maybe<PriceTypes>>>;
  priceTypesConnection?: Maybe<PriceTypesConnection>;
  price?: Maybe<Prices>;
  prices?: Maybe<Array<Maybe<Prices>>>;
  pricesConnection?: Maybe<PricesConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryItemGroupArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemGroupsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryItemPictureArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemPicturesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemPicturesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPriceTypeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPriceTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPriceTypesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPriceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPricesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPricesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  itemAdded?: Maybe<Items>;
};


export type SubscriptionItemAddedArgs = {
  id: Scalars['ID'];
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateItemGroupInput = {
  data?: Maybe<ItemGroupInput>;
};

export type CreateItemGroupPayload = {
  __typename?: 'createItemGroupPayload';
  itemGroup?: Maybe<ItemGroups>;
};

export type CreateItemInput = {
  data?: Maybe<ItemInput>;
};

export type CreateItemPayload = {
  __typename?: 'createItemPayload';
  item?: Maybe<Items>;
};

export type CreateItemPictureInput = {
  data?: Maybe<ItemPictureInput>;
};

export type CreateItemPicturePayload = {
  __typename?: 'createItemPicturePayload';
  itemPicture?: Maybe<ItemPictures>;
};

export type CreatePriceInput = {
  data?: Maybe<PriceInput>;
};

export type CreatePricePayload = {
  __typename?: 'createPricePayload';
  price?: Maybe<Prices>;
};

export type CreatePriceTypeInput = {
  data?: Maybe<PriceTypeInput>;
};

export type CreatePriceTypePayload = {
  __typename?: 'createPriceTypePayload';
  priceType?: Maybe<PriceTypes>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteItemGroupInput = {
  where?: Maybe<InputId>;
};

export type DeleteItemGroupPayload = {
  __typename?: 'deleteItemGroupPayload';
  itemGroup?: Maybe<ItemGroups>;
};

export type DeleteItemInput = {
  where?: Maybe<InputId>;
};

export type DeleteItemPayload = {
  __typename?: 'deleteItemPayload';
  item?: Maybe<Items>;
};

export type DeleteItemPictureInput = {
  where?: Maybe<InputId>;
};

export type DeleteItemPicturePayload = {
  __typename?: 'deleteItemPicturePayload';
  itemPicture?: Maybe<ItemPictures>;
};

export type DeletePriceInput = {
  where?: Maybe<InputId>;
};

export type DeletePricePayload = {
  __typename?: 'deletePricePayload';
  price?: Maybe<Prices>;
};

export type DeletePriceTypeInput = {
  where?: Maybe<InputId>;
};

export type DeletePriceTypePayload = {
  __typename?: 'deletePriceTypePayload';
  priceType?: Maybe<PriceTypes>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditItemGroupInput = {
  name?: Maybe<Scalars['String']>;
  parent_group_id?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditItemInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  item_picture?: Maybe<Scalars['ID']>;
  item_group?: Maybe<Scalars['ID']>;
  prices?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditItemPictureInput = {
  pictures?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPriceInput = {
  price?: Maybe<Scalars['Float']>;
  price_type?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPriceTypeInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateItemGroupInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItemGroupInput>;
};

export type UpdateItemGroupPayload = {
  __typename?: 'updateItemGroupPayload';
  itemGroup?: Maybe<ItemGroups>;
};

export type UpdateItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItemInput>;
};

export type UpdateItemPayload = {
  __typename?: 'updateItemPayload';
  item?: Maybe<Items>;
};

export type UpdateItemPictureInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItemPictureInput>;
};

export type UpdateItemPicturePayload = {
  __typename?: 'updateItemPicturePayload';
  itemPicture?: Maybe<ItemPictures>;
};

export type UpdatePriceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPriceInput>;
};

export type UpdatePricePayload = {
  __typename?: 'updatePricePayload';
  price?: Maybe<Prices>;
};

export type UpdatePriceTypeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPriceTypeInput>;
};

export type UpdatePriceTypePayload = {
  __typename?: 'updatePriceTypePayload';
  priceType?: Maybe<PriceTypes>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ItemGroupsFragment = (
  { __typename?: 'ItemGroups' }
  & Pick<ItemGroups, 'id' | 'name' | 'parent_group_id'>
);

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = (
  { __typename?: 'Query' }
  & { itemGroups?: Maybe<Array<Maybe<(
    { __typename?: 'ItemGroups' }
    & ItemGroupsFragment
  )>>> }
);

export type ItemAddedSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItemAddedSubscription = (
  { __typename?: 'Subscription' }
  & { itemAdded?: Maybe<(
    { __typename?: 'Items' }
    & Pick<Items, 'id' | 'name' | 'description'>
  )> }
);

export type AddItemMutationVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  item_group: Scalars['ID'];
}>;


export type AddItemMutation = (
  { __typename?: 'Mutation' }
  & { createItem?: Maybe<(
    { __typename?: 'createItemPayload' }
    & { item?: Maybe<(
      { __typename?: 'Items' }
      & Pick<Items, 'name' | 'description'>
    )> }
  )> }
);

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteItem?: Maybe<(
    { __typename?: 'deleteItemPayload' }
    & { item?: Maybe<(
      { __typename?: 'Items' }
      & Pick<Items, 'name' | 'description'>
    )> }
  )> }
);

export type ItemListFieldsFragment = (
  { __typename?: 'Items' }
  & Pick<Items, 'id' | 'name' | 'description'>
  & { item_picture?: Maybe<(
    { __typename?: 'ItemPictures' }
    & { pictures?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'previewUrl'>
    )>>> }
  )>, prices?: Maybe<Array<Maybe<(
    { __typename?: 'Prices' }
    & Pick<Prices, 'price'>
  )>>> }
);

export type GetItemsQueryVariables = Exact<{
  sort?: Maybe<Scalars['String']>;
  where: Scalars['JSON'];
}>;


export type GetItemsQuery = (
  { __typename?: 'Query' }
  & { items?: Maybe<Array<Maybe<(
    { __typename?: 'Items' }
    & ItemListFieldsFragment
  )>>> }
);

export type UpdateItemMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>;
}>;


export type UpdateItemMutation = (
  { __typename?: 'Mutation' }
  & { updateItem?: Maybe<(
    { __typename?: 'updateItemPayload' }
    & { item?: Maybe<(
      { __typename?: 'Items' }
      & Pick<Items, 'name'>
    )> }
  )> }
);

export type GetPriceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPriceTypesQuery = (
  { __typename?: 'Query' }
  & { priceTypes?: Maybe<Array<Maybe<(
    { __typename?: 'PriceTypes' }
    & Pick<PriceTypes, 'name' | 'id'>
  )>>> }
);

export const ItemGroupsFragmentDoc = gql`
    fragment ItemGroups on ItemGroups {
  id
  name
  parent_group_id
}
    `;
export const ItemListFieldsFragmentDoc = gql`
    fragment ItemListFields on Items {
  id
  name
  description
  item_picture {
    pictures {
      url
      previewUrl
    }
  }
  prices {
    price
  }
}
    `;
export const GetGroupsDoc = gql`
    query GetGroups {
  itemGroups {
    ...ItemGroups
  }
}
    ${ItemGroupsFragmentDoc}`;
export const ItemAddedDoc = gql`
    subscription ItemAdded($id: ID!) {
  itemAdded(id: $id) {
    id
    name
    description
  }
}
    `;
export const AddItemDoc = gql`
    mutation addItem($name: String!, $description: String, $item_group: ID!) {
  createItem(
    input: {data: {name: $name, description: $description, item_group: $item_group}}
  ) {
    item {
      name
      description
    }
  }
}
    `;
export const DeleteItemDoc = gql`
    mutation deleteItem($id: ID!) {
  deleteItem(input: {where: {id: $id}}) {
    item {
      name
      description
    }
  }
}
    `;
export const GetItemsDoc = gql`
    query GetItems($sort: String, $where: JSON!) {
  items(sort: $sort, where: $where) {
    ...ItemListFields
  }
}
    ${ItemListFieldsFragmentDoc}`;
export const UpdateItemDoc = gql`
    mutation updateItem($id: ID!, $name: String, $description: String, $price: [ID]) {
  updateItem(
    input: {where: {id: $id}, data: {name: $name, description: $description, created_by: 1, prices: $price}}
  ) {
    item {
      name
    }
  }
}
    `;
export const GetPriceTypesDoc = gql`
    query GetPriceTypes {
  priceTypes {
    name
    id
  }
}
    `;
export const GetGroups = (
            options: Omit<
              QueryOptions<GetGroupsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetGroupsQuery> & {
              query: ObservableQuery<
                GetGroupsQuery,
                GetGroupsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetGroupsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetGroupsQuery> & {
                query: ObservableQuery<
                  GetGroupsQuery,
                  GetGroupsQueryVariables
                >;
              }
            >(
              { data: null, loading: true, error: null, networkStatus: 1, query: null },
              (set) => {
                q.subscribe((v) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const ItemAdded = (
            options: Omit<SubscriptionOptions<ItemAddedSubscriptionVariables>, "query">
          ) => {
            const q = client.subscribe<ItemAddedSubscription, ItemAddedSubscriptionVariables>(
              {
                query: ItemAddedDoc,
                ...options,
              }
            )
            return q;
          }
export const addItem = (
            options: Omit<
              MutationOptions<any, AddItemMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<AddItemMutation, AddItemMutationVariables>({
              mutation: AddItemDoc,
              ...options,
            });
            return m;
          }
export const deleteItem = (
            options: Omit<
              MutationOptions<any, DeleteItemMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<DeleteItemMutation, DeleteItemMutationVariables>({
              mutation: DeleteItemDoc,
              ...options,
            });
            return m;
          }
export const GetItems = (
            options: Omit<
              QueryOptions<GetItemsQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetItemsQuery> & {
              query: ObservableQuery<
                GetItemsQuery,
                GetItemsQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetItemsDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetItemsQuery> & {
                query: ObservableQuery<
                  GetItemsQuery,
                  GetItemsQueryVariables
                >;
              }
            >(
              { data: null, loading: true, error: null, networkStatus: 1, query: null },
              (set) => {
                q.subscribe((v) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        
export const updateItem = (
            options: Omit<
              MutationOptions<any, UpdateItemMutationVariables>, 
              "mutation"
            >
          ) => {
            const m = client.mutate<UpdateItemMutation, UpdateItemMutationVariables>({
              mutation: UpdateItemDoc,
              ...options,
            });
            return m;
          }
export const GetPriceTypes = (
            options: Omit<
              QueryOptions<GetPriceTypesQueryVariables>, 
              "query"
            >
          ): Readable<
            ApolloQueryResult<GetPriceTypesQuery> & {
              query: ObservableQuery<
                GetPriceTypesQuery,
                GetPriceTypesQueryVariables
              >;
            }
          > => {
            const q = client.watchQuery({
              query: GetPriceTypesDoc,
              ...options,
            });
            var result = readable<
              ApolloQueryResult<GetPriceTypesQuery> & {
                query: ObservableQuery<
                  GetPriceTypesQuery,
                  GetPriceTypesQueryVariables
                >;
              }
            >(
              { data: null, loading: true, error: null, networkStatus: 1, query: null },
              (set) => {
                q.subscribe((v) => {
                  set({ ...v, query: q });
                });
              }
            );
            return result;
          }
        