export const typeDefs = /* GraphQL */ `type AggregateAlcance {
  count: Int!
}

type AggregateAnno {
  count: Int!
}

type AggregateArea {
  count: Int!
}

type AggregateEje {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateIntegrante {
  count: Int!
}

type AggregateLinea {
  count: Int!
}

type AggregateMes {
  count: Int!
}

type AggregatePago {
  count: Int!
}

type AggregateProyecto {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateTipo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Alcance {
  id: ID!
  nombre: String!
  valor: Int!
}

type AlcanceConnection {
  pageInfo: PageInfo!
  edges: [AlcanceEdge]!
  aggregate: AggregateAlcance!
}

input AlcanceCreateInput {
  nombre: String!
  valor: Int!
}

input AlcanceCreateOneInput {
  create: AlcanceCreateInput
  connect: AlcanceWhereUniqueInput
}

type AlcanceEdge {
  node: Alcance!
  cursor: String!
}

enum AlcanceOrderByInput {
  id_ASC
  id_DESC
  nombre_ASC
  nombre_DESC
  valor_ASC
  valor_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AlcancePreviousValues {
  id: ID!
  nombre: String!
  valor: Int!
}

type AlcanceSubscriptionPayload {
  mutation: MutationType!
  node: Alcance
  updatedFields: [String!]
  previousValues: AlcancePreviousValues
}

input AlcanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AlcanceWhereInput
  AND: [AlcanceSubscriptionWhereInput!]
  OR: [AlcanceSubscriptionWhereInput!]
  NOT: [AlcanceSubscriptionWhereInput!]
}

input AlcanceUpdateDataInput {
  nombre: String
  valor: Int
}

input AlcanceUpdateInput {
  nombre: String
  valor: Int
}

input AlcanceUpdateManyMutationInput {
  nombre: String
  valor: Int
}

input AlcanceUpdateOneRequiredInput {
  create: AlcanceCreateInput
  update: AlcanceUpdateDataInput
  upsert: AlcanceUpsertNestedInput
  connect: AlcanceWhereUniqueInput
}

input AlcanceUpsertNestedInput {
  update: AlcanceUpdateDataInput!
  create: AlcanceCreateInput!
}

input AlcanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  valor: Int
  valor_not: Int
  valor_in: [Int!]
  valor_not_in: [Int!]
  valor_lt: Int
  valor_lte: Int
  valor_gt: Int
  valor_gte: Int
  AND: [AlcanceWhereInput!]
  OR: [AlcanceWhereInput!]
  NOT: [AlcanceWhereInput!]
}

input AlcanceWhereUniqueInput {
  id: ID
  nombre: String
}

type Anno {
  id: ID!
  numero: Int!
  habilitado: Boolean!
}

type AnnoConnection {
  pageInfo: PageInfo!
  edges: [AnnoEdge]!
  aggregate: AggregateAnno!
}

input AnnoCreateInput {
  numero: Int!
  habilitado: Boolean
}

input AnnoCreateOneInput {
  create: AnnoCreateInput
  connect: AnnoWhereUniqueInput
}

type AnnoEdge {
  node: Anno!
  cursor: String!
}

enum AnnoOrderByInput {
  id_ASC
  id_DESC
  numero_ASC
  numero_DESC
  habilitado_ASC
  habilitado_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnoPreviousValues {
  id: ID!
  numero: Int!
  habilitado: Boolean!
}

type AnnoSubscriptionPayload {
  mutation: MutationType!
  node: Anno
  updatedFields: [String!]
  previousValues: AnnoPreviousValues
}

input AnnoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnnoWhereInput
  AND: [AnnoSubscriptionWhereInput!]
  OR: [AnnoSubscriptionWhereInput!]
  NOT: [AnnoSubscriptionWhereInput!]
}

input AnnoUpdateDataInput {
  numero: Int
  habilitado: Boolean
}

input AnnoUpdateInput {
  numero: Int
  habilitado: Boolean
}

input AnnoUpdateManyMutationInput {
  numero: Int
  habilitado: Boolean
}

input AnnoUpdateOneRequiredInput {
  create: AnnoCreateInput
  update: AnnoUpdateDataInput
  upsert: AnnoUpsertNestedInput
  connect: AnnoWhereUniqueInput
}

input AnnoUpsertNestedInput {
  update: AnnoUpdateDataInput!
  create: AnnoCreateInput!
}

input AnnoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  numero: Int
  numero_not: Int
  numero_in: [Int!]
  numero_not_in: [Int!]
  numero_lt: Int
  numero_lte: Int
  numero_gt: Int
  numero_gte: Int
  habilitado: Boolean
  habilitado_not: Boolean
  AND: [AnnoWhereInput!]
  OR: [AnnoWhereInput!]
  NOT: [AnnoWhereInput!]
}

input AnnoWhereUniqueInput {
  id: ID
  numero: Int
}

type Area {
  id: ID!
  nombre: String!
}

type AreaConnection {
  pageInfo: PageInfo!
  edges: [AreaEdge]!
  aggregate: AggregateArea!
}

input AreaCreateInput {
  nombre: String!
}

input AreaCreateOneInput {
  create: AreaCreateInput
  connect: AreaWhereUniqueInput
}

type AreaEdge {
  node: Area!
  cursor: String!
}

enum AreaOrderByInput {
  id_ASC
  id_DESC
  nombre_ASC
  nombre_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AreaPreviousValues {
  id: ID!
  nombre: String!
}

type AreaSubscriptionPayload {
  mutation: MutationType!
  node: Area
  updatedFields: [String!]
  previousValues: AreaPreviousValues
}

input AreaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AreaWhereInput
  AND: [AreaSubscriptionWhereInput!]
  OR: [AreaSubscriptionWhereInput!]
  NOT: [AreaSubscriptionWhereInput!]
}

input AreaUpdateDataInput {
  nombre: String
}

input AreaUpdateInput {
  nombre: String
}

input AreaUpdateManyMutationInput {
  nombre: String
}

input AreaUpdateOneRequiredInput {
  create: AreaCreateInput
  update: AreaUpdateDataInput
  upsert: AreaUpsertNestedInput
  connect: AreaWhereUniqueInput
}

input AreaUpsertNestedInput {
  update: AreaUpdateDataInput!
  create: AreaCreateInput!
}

input AreaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  AND: [AreaWhereInput!]
  OR: [AreaWhereInput!]
  NOT: [AreaWhereInput!]
}

input AreaWhereUniqueInput {
  id: ID
  nombre: String
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Eje {
  id: ID!
  nombre: String!
}

type EjeConnection {
  pageInfo: PageInfo!
  edges: [EjeEdge]!
  aggregate: AggregateEje!
}

input EjeCreateInput {
  nombre: String!
}

input EjeCreateOneInput {
  create: EjeCreateInput
  connect: EjeWhereUniqueInput
}

type EjeEdge {
  node: Eje!
  cursor: String!
}

enum EjeOrderByInput {
  id_ASC
  id_DESC
  nombre_ASC
  nombre_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EjePreviousValues {
  id: ID!
  nombre: String!
}

type EjeSubscriptionPayload {
  mutation: MutationType!
  node: Eje
  updatedFields: [String!]
  previousValues: EjePreviousValues
}

input EjeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EjeWhereInput
  AND: [EjeSubscriptionWhereInput!]
  OR: [EjeSubscriptionWhereInput!]
  NOT: [EjeSubscriptionWhereInput!]
}

input EjeUpdateDataInput {
  nombre: String
}

input EjeUpdateInput {
  nombre: String
}

input EjeUpdateManyMutationInput {
  nombre: String
}

input EjeUpdateOneRequiredInput {
  create: EjeCreateInput
  update: EjeUpdateDataInput
  upsert: EjeUpsertNestedInput
  connect: EjeWhereUniqueInput
}

input EjeUpsertNestedInput {
  update: EjeUpdateDataInput!
  create: EjeCreateInput!
}

input EjeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  AND: [EjeWhereInput!]
  OR: [EjeWhereInput!]
  NOT: [EjeWhereInput!]
}

input EjeWhereUniqueInput {
  id: ID
  nombre: String
}

enum ESTADO {
  CREADO
  HABILITADO
  CERRADO
}

type File {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
  size: Int!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
  size: Int!
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  path_ASC
  path_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  size_ASC
  size_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FilePreviousValues {
  id: ID!
  path: String!
  filename: String!
  mimetype: String!
  encoding: String!
  size: Int!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateInput {
  path: String
  filename: String
  mimetype: String
  encoding: String
  size: Int
}

input FileUpdateManyMutationInput {
  path: String
  filename: String
  mimetype: String
  encoding: String
  size: Int
}

input FileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  path: String
  path_not: String
  path_in: [String!]
  path_not_in: [String!]
  path_lt: String
  path_lte: String
  path_gt: String
  path_gte: String
  path_contains: String
  path_not_contains: String
  path_starts_with: String
  path_not_starts_with: String
  path_ends_with: String
  path_not_ends_with: String
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  mimetype: String
  mimetype_not: String
  mimetype_in: [String!]
  mimetype_not_in: [String!]
  mimetype_lt: String
  mimetype_lte: String
  mimetype_gt: String
  mimetype_gte: String
  mimetype_contains: String
  mimetype_not_contains: String
  mimetype_starts_with: String
  mimetype_not_starts_with: String
  mimetype_ends_with: String
  mimetype_not_ends_with: String
  encoding: String
  encoding_not: String
  encoding_in: [String!]
  encoding_not_in: [String!]
  encoding_lt: String
  encoding_lte: String
  encoding_gt: String
  encoding_gte: String
  encoding_contains: String
  encoding_not_contains: String
  encoding_starts_with: String
  encoding_not_starts_with: String
  encoding_ends_with: String
  encoding_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

type Integrante {
  id: ID!
  usuario: User!
  proyecto: Proyecto!
  jefeProyecto: Boolean!
  pagos(where: PagoWhereInput, orderBy: PagoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pago!]
}

type IntegranteConnection {
  pageInfo: PageInfo!
  edges: [IntegranteEdge]!
  aggregate: AggregateIntegrante!
}

input IntegranteCreateInput {
  usuario: UserCreateOneWithoutIntegrantesInput!
  proyecto: ProyectoCreateOneWithoutIntegrantesInput!
  jefeProyecto: Boolean
  pagos: PagoCreateManyWithoutIntegranteInput
}

input IntegranteCreateManyWithoutProyectoInput {
  create: [IntegranteCreateWithoutProyectoInput!]
  connect: [IntegranteWhereUniqueInput!]
}

input IntegranteCreateManyWithoutUsuarioInput {
  create: [IntegranteCreateWithoutUsuarioInput!]
  connect: [IntegranteWhereUniqueInput!]
}

input IntegranteCreateOneWithoutPagosInput {
  create: IntegranteCreateWithoutPagosInput
  connect: IntegranteWhereUniqueInput
}

input IntegranteCreateWithoutPagosInput {
  usuario: UserCreateOneWithoutIntegrantesInput!
  proyecto: ProyectoCreateOneWithoutIntegrantesInput!
  jefeProyecto: Boolean
}

input IntegranteCreateWithoutProyectoInput {
  usuario: UserCreateOneWithoutIntegrantesInput!
  jefeProyecto: Boolean
  pagos: PagoCreateManyWithoutIntegranteInput
}

input IntegranteCreateWithoutUsuarioInput {
  proyecto: ProyectoCreateOneWithoutIntegrantesInput!
  jefeProyecto: Boolean
  pagos: PagoCreateManyWithoutIntegranteInput
}

type IntegranteEdge {
  node: Integrante!
  cursor: String!
}

enum IntegranteOrderByInput {
  id_ASC
  id_DESC
  jefeProyecto_ASC
  jefeProyecto_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type IntegrantePreviousValues {
  id: ID!
  jefeProyecto: Boolean!
}

type IntegranteSubscriptionPayload {
  mutation: MutationType!
  node: Integrante
  updatedFields: [String!]
  previousValues: IntegrantePreviousValues
}

input IntegranteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IntegranteWhereInput
  AND: [IntegranteSubscriptionWhereInput!]
  OR: [IntegranteSubscriptionWhereInput!]
  NOT: [IntegranteSubscriptionWhereInput!]
}

input IntegranteUpdateInput {
  usuario: UserUpdateOneRequiredWithoutIntegrantesInput
  proyecto: ProyectoUpdateOneRequiredWithoutIntegrantesInput
  jefeProyecto: Boolean
  pagos: PagoUpdateManyWithoutIntegranteInput
}

input IntegranteUpdateManyMutationInput {
  jefeProyecto: Boolean
}

input IntegranteUpdateManyWithoutProyectoInput {
  create: [IntegranteCreateWithoutProyectoInput!]
  delete: [IntegranteWhereUniqueInput!]
  connect: [IntegranteWhereUniqueInput!]
  disconnect: [IntegranteWhereUniqueInput!]
  update: [IntegranteUpdateWithWhereUniqueWithoutProyectoInput!]
  upsert: [IntegranteUpsertWithWhereUniqueWithoutProyectoInput!]
}

input IntegranteUpdateManyWithoutUsuarioInput {
  create: [IntegranteCreateWithoutUsuarioInput!]
  delete: [IntegranteWhereUniqueInput!]
  connect: [IntegranteWhereUniqueInput!]
  disconnect: [IntegranteWhereUniqueInput!]
  update: [IntegranteUpdateWithWhereUniqueWithoutUsuarioInput!]
  upsert: [IntegranteUpsertWithWhereUniqueWithoutUsuarioInput!]
}

input IntegranteUpdateOneRequiredWithoutPagosInput {
  create: IntegranteCreateWithoutPagosInput
  update: IntegranteUpdateWithoutPagosDataInput
  upsert: IntegranteUpsertWithoutPagosInput
  connect: IntegranteWhereUniqueInput
}

input IntegranteUpdateWithoutPagosDataInput {
  usuario: UserUpdateOneRequiredWithoutIntegrantesInput
  proyecto: ProyectoUpdateOneRequiredWithoutIntegrantesInput
  jefeProyecto: Boolean
}

input IntegranteUpdateWithoutProyectoDataInput {
  usuario: UserUpdateOneRequiredWithoutIntegrantesInput
  jefeProyecto: Boolean
  pagos: PagoUpdateManyWithoutIntegranteInput
}

input IntegranteUpdateWithoutUsuarioDataInput {
  proyecto: ProyectoUpdateOneRequiredWithoutIntegrantesInput
  jefeProyecto: Boolean
  pagos: PagoUpdateManyWithoutIntegranteInput
}

input IntegranteUpdateWithWhereUniqueWithoutProyectoInput {
  where: IntegranteWhereUniqueInput!
  data: IntegranteUpdateWithoutProyectoDataInput!
}

input IntegranteUpdateWithWhereUniqueWithoutUsuarioInput {
  where: IntegranteWhereUniqueInput!
  data: IntegranteUpdateWithoutUsuarioDataInput!
}

input IntegranteUpsertWithoutPagosInput {
  update: IntegranteUpdateWithoutPagosDataInput!
  create: IntegranteCreateWithoutPagosInput!
}

input IntegranteUpsertWithWhereUniqueWithoutProyectoInput {
  where: IntegranteWhereUniqueInput!
  update: IntegranteUpdateWithoutProyectoDataInput!
  create: IntegranteCreateWithoutProyectoInput!
}

input IntegranteUpsertWithWhereUniqueWithoutUsuarioInput {
  where: IntegranteWhereUniqueInput!
  update: IntegranteUpdateWithoutUsuarioDataInput!
  create: IntegranteCreateWithoutUsuarioInput!
}

input IntegranteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  usuario: UserWhereInput
  proyecto: ProyectoWhereInput
  jefeProyecto: Boolean
  jefeProyecto_not: Boolean
  pagos_every: PagoWhereInput
  pagos_some: PagoWhereInput
  pagos_none: PagoWhereInput
  AND: [IntegranteWhereInput!]
  OR: [IntegranteWhereInput!]
  NOT: [IntegranteWhereInput!]
}

input IntegranteWhereUniqueInput {
  id: ID
}

type Linea {
  id: ID!
  nombre: String!
}

type LineaConnection {
  pageInfo: PageInfo!
  edges: [LineaEdge]!
  aggregate: AggregateLinea!
}

input LineaCreateInput {
  nombre: String!
}

input LineaCreateOneInput {
  create: LineaCreateInput
  connect: LineaWhereUniqueInput
}

type LineaEdge {
  node: Linea!
  cursor: String!
}

enum LineaOrderByInput {
  id_ASC
  id_DESC
  nombre_ASC
  nombre_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LineaPreviousValues {
  id: ID!
  nombre: String!
}

type LineaSubscriptionPayload {
  mutation: MutationType!
  node: Linea
  updatedFields: [String!]
  previousValues: LineaPreviousValues
}

input LineaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LineaWhereInput
  AND: [LineaSubscriptionWhereInput!]
  OR: [LineaSubscriptionWhereInput!]
  NOT: [LineaSubscriptionWhereInput!]
}

input LineaUpdateDataInput {
  nombre: String
}

input LineaUpdateInput {
  nombre: String
}

input LineaUpdateManyMutationInput {
  nombre: String
}

input LineaUpdateOneRequiredInput {
  create: LineaCreateInput
  update: LineaUpdateDataInput
  upsert: LineaUpsertNestedInput
  connect: LineaWhereUniqueInput
}

input LineaUpsertNestedInput {
  update: LineaUpdateDataInput!
  create: LineaCreateInput!
}

input LineaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  AND: [LineaWhereInput!]
  OR: [LineaWhereInput!]
  NOT: [LineaWhereInput!]
}

input LineaWhereUniqueInput {
  id: ID
  nombre: String
}

scalar Long

type Mes {
  id: ID!
  nombre: MES_ENUM!
  habilitado: Boolean!
}

enum MES_ENUM {
  ENERO
  FEBRERO
  MARZO
  ABRIL
  MAYO
  JUNIO
  JULIO
  AGOSTO
  SEPTIEMBRE
  OCTUBRE
  NOVIEMBRE
  DICIEMBRE
}

type MesConnection {
  pageInfo: PageInfo!
  edges: [MesEdge]!
  aggregate: AggregateMes!
}

input MesCreateInput {
  nombre: MES_ENUM!
  habilitado: Boolean
}

input MesCreateOneInput {
  create: MesCreateInput
  connect: MesWhereUniqueInput
}

type MesEdge {
  node: Mes!
  cursor: String!
}

enum MesOrderByInput {
  id_ASC
  id_DESC
  nombre_ASC
  nombre_DESC
  habilitado_ASC
  habilitado_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MesPreviousValues {
  id: ID!
  nombre: MES_ENUM!
  habilitado: Boolean!
}

type MesSubscriptionPayload {
  mutation: MutationType!
  node: Mes
  updatedFields: [String!]
  previousValues: MesPreviousValues
}

input MesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MesWhereInput
  AND: [MesSubscriptionWhereInput!]
  OR: [MesSubscriptionWhereInput!]
  NOT: [MesSubscriptionWhereInput!]
}

input MesUpdateDataInput {
  nombre: MES_ENUM
  habilitado: Boolean
}

input MesUpdateInput {
  nombre: MES_ENUM
  habilitado: Boolean
}

input MesUpdateManyMutationInput {
  nombre: MES_ENUM
  habilitado: Boolean
}

input MesUpdateOneRequiredInput {
  create: MesCreateInput
  update: MesUpdateDataInput
  upsert: MesUpsertNestedInput
  connect: MesWhereUniqueInput
}

input MesUpsertNestedInput {
  update: MesUpdateDataInput!
  create: MesCreateInput!
}

input MesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nombre: MES_ENUM
  nombre_not: MES_ENUM
  nombre_in: [MES_ENUM!]
  nombre_not_in: [MES_ENUM!]
  habilitado: Boolean
  habilitado_not: Boolean
  AND: [MesWhereInput!]
  OR: [MesWhereInput!]
  NOT: [MesWhereInput!]
}

input MesWhereUniqueInput {
  id: ID
  nombre: MES_ENUM
}

type Mutation {
  createAlcance(data: AlcanceCreateInput!): Alcance!
  updateAlcance(data: AlcanceUpdateInput!, where: AlcanceWhereUniqueInput!): Alcance
  updateManyAlcances(data: AlcanceUpdateManyMutationInput!, where: AlcanceWhereInput): BatchPayload!
  upsertAlcance(where: AlcanceWhereUniqueInput!, create: AlcanceCreateInput!, update: AlcanceUpdateInput!): Alcance!
  deleteAlcance(where: AlcanceWhereUniqueInput!): Alcance
  deleteManyAlcances(where: AlcanceWhereInput): BatchPayload!
  createAnno(data: AnnoCreateInput!): Anno!
  updateAnno(data: AnnoUpdateInput!, where: AnnoWhereUniqueInput!): Anno
  updateManyAnnoes(data: AnnoUpdateManyMutationInput!, where: AnnoWhereInput): BatchPayload!
  upsertAnno(where: AnnoWhereUniqueInput!, create: AnnoCreateInput!, update: AnnoUpdateInput!): Anno!
  deleteAnno(where: AnnoWhereUniqueInput!): Anno
  deleteManyAnnoes(where: AnnoWhereInput): BatchPayload!
  createArea(data: AreaCreateInput!): Area!
  updateArea(data: AreaUpdateInput!, where: AreaWhereUniqueInput!): Area
  updateManyAreas(data: AreaUpdateManyMutationInput!, where: AreaWhereInput): BatchPayload!
  upsertArea(where: AreaWhereUniqueInput!, create: AreaCreateInput!, update: AreaUpdateInput!): Area!
  deleteArea(where: AreaWhereUniqueInput!): Area
  deleteManyAreas(where: AreaWhereInput): BatchPayload!
  createEje(data: EjeCreateInput!): Eje!
  updateEje(data: EjeUpdateInput!, where: EjeWhereUniqueInput!): Eje
  updateManyEjes(data: EjeUpdateManyMutationInput!, where: EjeWhereInput): BatchPayload!
  upsertEje(where: EjeWhereUniqueInput!, create: EjeCreateInput!, update: EjeUpdateInput!): Eje!
  deleteEje(where: EjeWhereUniqueInput!): Eje
  deleteManyEjes(where: EjeWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createIntegrante(data: IntegranteCreateInput!): Integrante!
  updateIntegrante(data: IntegranteUpdateInput!, where: IntegranteWhereUniqueInput!): Integrante
  updateManyIntegrantes(data: IntegranteUpdateManyMutationInput!, where: IntegranteWhereInput): BatchPayload!
  upsertIntegrante(where: IntegranteWhereUniqueInput!, create: IntegranteCreateInput!, update: IntegranteUpdateInput!): Integrante!
  deleteIntegrante(where: IntegranteWhereUniqueInput!): Integrante
  deleteManyIntegrantes(where: IntegranteWhereInput): BatchPayload!
  createLinea(data: LineaCreateInput!): Linea!
  updateLinea(data: LineaUpdateInput!, where: LineaWhereUniqueInput!): Linea
  updateManyLineas(data: LineaUpdateManyMutationInput!, where: LineaWhereInput): BatchPayload!
  upsertLinea(where: LineaWhereUniqueInput!, create: LineaCreateInput!, update: LineaUpdateInput!): Linea!
  deleteLinea(where: LineaWhereUniqueInput!): Linea
  deleteManyLineas(where: LineaWhereInput): BatchPayload!
  createMes(data: MesCreateInput!): Mes!
  updateMes(data: MesUpdateInput!, where: MesWhereUniqueInput!): Mes
  updateManyMeses(data: MesUpdateManyMutationInput!, where: MesWhereInput): BatchPayload!
  upsertMes(where: MesWhereUniqueInput!, create: MesCreateInput!, update: MesUpdateInput!): Mes!
  deleteMes(where: MesWhereUniqueInput!): Mes
  deleteManyMeses(where: MesWhereInput): BatchPayload!
  createPago(data: PagoCreateInput!): Pago!
  updatePago(data: PagoUpdateInput!, where: PagoWhereUniqueInput!): Pago
  updateManyPagoes(data: PagoUpdateManyMutationInput!, where: PagoWhereInput): BatchPayload!
  upsertPago(where: PagoWhereUniqueInput!, create: PagoCreateInput!, update: PagoUpdateInput!): Pago!
  deletePago(where: PagoWhereUniqueInput!): Pago
  deleteManyPagoes(where: PagoWhereInput): BatchPayload!
  createProyecto(data: ProyectoCreateInput!): Proyecto!
  updateProyecto(data: ProyectoUpdateInput!, where: ProyectoWhereUniqueInput!): Proyecto
  updateManyProyectoes(data: ProyectoUpdateManyMutationInput!, where: ProyectoWhereInput): BatchPayload!
  upsertProyecto(where: ProyectoWhereUniqueInput!, create: ProyectoCreateInput!, update: ProyectoUpdateInput!): Proyecto!
  deleteProyecto(where: ProyectoWhereUniqueInput!): Proyecto
  deleteManyProyectoes(where: ProyectoWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createTipo(data: TipoCreateInput!): Tipo!
  updateTipo(data: TipoUpdateInput!, where: TipoWhereUniqueInput!): Tipo
  updateManyTipoes(data: TipoUpdateManyMutationInput!, where: TipoWhereInput): BatchPayload!
  upsertTipo(where: TipoWhereUniqueInput!, create: TipoCreateInput!, update: TipoUpdateInput!): Tipo!
  deleteTipo(where: TipoWhereUniqueInput!): Tipo
  deleteManyTipoes(where: TipoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pago {
  id: ID!
  integrante: Integrante!
  mes: Mes!
  anno: Anno!
  horas: Float!
  presencia: Int!
  incidencia: Int!
  relevancia: Int!
  complejidad: Int!
  gestion: Int!
  vinculacion: Int!
  calidad: Int!
  significacion: Int!
  cumplimiento: Int!
  calculo: Float!
}

type PagoConnection {
  pageInfo: PageInfo!
  edges: [PagoEdge]!
  aggregate: AggregatePago!
}

input PagoCreateInput {
  integrante: IntegranteCreateOneWithoutPagosInput!
  mes: MesCreateOneInput!
  anno: AnnoCreateOneInput!
  horas: Float
  presencia: Int
  incidencia: Int
  relevancia: Int
  complejidad: Int
  gestion: Int
  vinculacion: Int
  calidad: Int
  significacion: Int
  cumplimiento: Int
  calculo: Float
}

input PagoCreateManyWithoutIntegranteInput {
  create: [PagoCreateWithoutIntegranteInput!]
  connect: [PagoWhereUniqueInput!]
}

input PagoCreateWithoutIntegranteInput {
  mes: MesCreateOneInput!
  anno: AnnoCreateOneInput!
  horas: Float
  presencia: Int
  incidencia: Int
  relevancia: Int
  complejidad: Int
  gestion: Int
  vinculacion: Int
  calidad: Int
  significacion: Int
  cumplimiento: Int
  calculo: Float
}

type PagoEdge {
  node: Pago!
  cursor: String!
}

enum PagoOrderByInput {
  id_ASC
  id_DESC
  horas_ASC
  horas_DESC
  presencia_ASC
  presencia_DESC
  incidencia_ASC
  incidencia_DESC
  relevancia_ASC
  relevancia_DESC
  complejidad_ASC
  complejidad_DESC
  gestion_ASC
  gestion_DESC
  vinculacion_ASC
  vinculacion_DESC
  calidad_ASC
  calidad_DESC
  significacion_ASC
  significacion_DESC
  cumplimiento_ASC
  cumplimiento_DESC
  calculo_ASC
  calculo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PagoPreviousValues {
  id: ID!
  horas: Float!
  presencia: Int!
  incidencia: Int!
  relevancia: Int!
  complejidad: Int!
  gestion: Int!
  vinculacion: Int!
  calidad: Int!
  significacion: Int!
  cumplimiento: Int!
  calculo: Float!
}

type PagoSubscriptionPayload {
  mutation: MutationType!
  node: Pago
  updatedFields: [String!]
  previousValues: PagoPreviousValues
}

input PagoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PagoWhereInput
  AND: [PagoSubscriptionWhereInput!]
  OR: [PagoSubscriptionWhereInput!]
  NOT: [PagoSubscriptionWhereInput!]
}

input PagoUpdateInput {
  integrante: IntegranteUpdateOneRequiredWithoutPagosInput
  mes: MesUpdateOneRequiredInput
  anno: AnnoUpdateOneRequiredInput
  horas: Float
  presencia: Int
  incidencia: Int
  relevancia: Int
  complejidad: Int
  gestion: Int
  vinculacion: Int
  calidad: Int
  significacion: Int
  cumplimiento: Int
  calculo: Float
}

input PagoUpdateManyMutationInput {
  horas: Float
  presencia: Int
  incidencia: Int
  relevancia: Int
  complejidad: Int
  gestion: Int
  vinculacion: Int
  calidad: Int
  significacion: Int
  cumplimiento: Int
  calculo: Float
}

input PagoUpdateManyWithoutIntegranteInput {
  create: [PagoCreateWithoutIntegranteInput!]
  delete: [PagoWhereUniqueInput!]
  connect: [PagoWhereUniqueInput!]
  disconnect: [PagoWhereUniqueInput!]
  update: [PagoUpdateWithWhereUniqueWithoutIntegranteInput!]
  upsert: [PagoUpsertWithWhereUniqueWithoutIntegranteInput!]
}

input PagoUpdateWithoutIntegranteDataInput {
  mes: MesUpdateOneRequiredInput
  anno: AnnoUpdateOneRequiredInput
  horas: Float
  presencia: Int
  incidencia: Int
  relevancia: Int
  complejidad: Int
  gestion: Int
  vinculacion: Int
  calidad: Int
  significacion: Int
  cumplimiento: Int
  calculo: Float
}

input PagoUpdateWithWhereUniqueWithoutIntegranteInput {
  where: PagoWhereUniqueInput!
  data: PagoUpdateWithoutIntegranteDataInput!
}

input PagoUpsertWithWhereUniqueWithoutIntegranteInput {
  where: PagoWhereUniqueInput!
  update: PagoUpdateWithoutIntegranteDataInput!
  create: PagoCreateWithoutIntegranteInput!
}

input PagoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  integrante: IntegranteWhereInput
  mes: MesWhereInput
  anno: AnnoWhereInput
  horas: Float
  horas_not: Float
  horas_in: [Float!]
  horas_not_in: [Float!]
  horas_lt: Float
  horas_lte: Float
  horas_gt: Float
  horas_gte: Float
  presencia: Int
  presencia_not: Int
  presencia_in: [Int!]
  presencia_not_in: [Int!]
  presencia_lt: Int
  presencia_lte: Int
  presencia_gt: Int
  presencia_gte: Int
  incidencia: Int
  incidencia_not: Int
  incidencia_in: [Int!]
  incidencia_not_in: [Int!]
  incidencia_lt: Int
  incidencia_lte: Int
  incidencia_gt: Int
  incidencia_gte: Int
  relevancia: Int
  relevancia_not: Int
  relevancia_in: [Int!]
  relevancia_not_in: [Int!]
  relevancia_lt: Int
  relevancia_lte: Int
  relevancia_gt: Int
  relevancia_gte: Int
  complejidad: Int
  complejidad_not: Int
  complejidad_in: [Int!]
  complejidad_not_in: [Int!]
  complejidad_lt: Int
  complejidad_lte: Int
  complejidad_gt: Int
  complejidad_gte: Int
  gestion: Int
  gestion_not: Int
  gestion_in: [Int!]
  gestion_not_in: [Int!]
  gestion_lt: Int
  gestion_lte: Int
  gestion_gt: Int
  gestion_gte: Int
  vinculacion: Int
  vinculacion_not: Int
  vinculacion_in: [Int!]
  vinculacion_not_in: [Int!]
  vinculacion_lt: Int
  vinculacion_lte: Int
  vinculacion_gt: Int
  vinculacion_gte: Int
  calidad: Int
  calidad_not: Int
  calidad_in: [Int!]
  calidad_not_in: [Int!]
  calidad_lt: Int
  calidad_lte: Int
  calidad_gt: Int
  calidad_gte: Int
  significacion: Int
  significacion_not: Int
  significacion_in: [Int!]
  significacion_not_in: [Int!]
  significacion_lt: Int
  significacion_lte: Int
  significacion_gt: Int
  significacion_gte: Int
  cumplimiento: Int
  cumplimiento_not: Int
  cumplimiento_in: [Int!]
  cumplimiento_not_in: [Int!]
  cumplimiento_lt: Int
  cumplimiento_lte: Int
  cumplimiento_gt: Int
  cumplimiento_gte: Int
  calculo: Float
  calculo_not: Float
  calculo_in: [Float!]
  calculo_not_in: [Float!]
  calculo_lt: Float
  calculo_lte: Float
  calculo_gt: Float
  calculo_gte: Float
  AND: [PagoWhereInput!]
  OR: [PagoWhereInput!]
  NOT: [PagoWhereInput!]
}

input PagoWhereUniqueInput {
  id: ID
}

type Proyecto {
  id: ID!
  codigo: String!
  nombre: String!
  inicia: DateTime!
  finaliza: DateTime!
  area: Area!
  tipo: Tipo!
  linea: Linea!
  eje: Eje!
  alcance: Alcance!
  estado: ESTADO!
  integrantes(where: IntegranteWhereInput, orderBy: IntegranteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Integrante!]
}

type ProyectoConnection {
  pageInfo: PageInfo!
  edges: [ProyectoEdge]!
  aggregate: AggregateProyecto!
}

input ProyectoCreateInput {
  codigo: String!
  nombre: String!
  inicia: DateTime!
  finaliza: DateTime!
  area: AreaCreateOneInput!
  tipo: TipoCreateOneInput!
  linea: LineaCreateOneInput!
  eje: EjeCreateOneInput!
  alcance: AlcanceCreateOneInput!
  estado: ESTADO!
  integrantes: IntegranteCreateManyWithoutProyectoInput
}

input ProyectoCreateOneWithoutIntegrantesInput {
  create: ProyectoCreateWithoutIntegrantesInput
  connect: ProyectoWhereUniqueInput
}

input ProyectoCreateWithoutIntegrantesInput {
  codigo: String!
  nombre: String!
  inicia: DateTime!
  finaliza: DateTime!
  area: AreaCreateOneInput!
  tipo: TipoCreateOneInput!
  linea: LineaCreateOneInput!
  eje: EjeCreateOneInput!
  alcance: AlcanceCreateOneInput!
  estado: ESTADO!
}

type ProyectoEdge {
  node: Proyecto!
  cursor: String!
}

enum ProyectoOrderByInput {
  id_ASC
  id_DESC
  codigo_ASC
  codigo_DESC
  nombre_ASC
  nombre_DESC
  inicia_ASC
  inicia_DESC
  finaliza_ASC
  finaliza_DESC
  estado_ASC
  estado_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProyectoPreviousValues {
  id: ID!
  codigo: String!
  nombre: String!
  inicia: DateTime!
  finaliza: DateTime!
  estado: ESTADO!
}

type ProyectoSubscriptionPayload {
  mutation: MutationType!
  node: Proyecto
  updatedFields: [String!]
  previousValues: ProyectoPreviousValues
}

input ProyectoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProyectoWhereInput
  AND: [ProyectoSubscriptionWhereInput!]
  OR: [ProyectoSubscriptionWhereInput!]
  NOT: [ProyectoSubscriptionWhereInput!]
}

input ProyectoUpdateInput {
  codigo: String
  nombre: String
  inicia: DateTime
  finaliza: DateTime
  area: AreaUpdateOneRequiredInput
  tipo: TipoUpdateOneRequiredInput
  linea: LineaUpdateOneRequiredInput
  eje: EjeUpdateOneRequiredInput
  alcance: AlcanceUpdateOneRequiredInput
  estado: ESTADO
  integrantes: IntegranteUpdateManyWithoutProyectoInput
}

input ProyectoUpdateManyMutationInput {
  codigo: String
  nombre: String
  inicia: DateTime
  finaliza: DateTime
  estado: ESTADO
}

input ProyectoUpdateOneRequiredWithoutIntegrantesInput {
  create: ProyectoCreateWithoutIntegrantesInput
  update: ProyectoUpdateWithoutIntegrantesDataInput
  upsert: ProyectoUpsertWithoutIntegrantesInput
  connect: ProyectoWhereUniqueInput
}

input ProyectoUpdateWithoutIntegrantesDataInput {
  codigo: String
  nombre: String
  inicia: DateTime
  finaliza: DateTime
  area: AreaUpdateOneRequiredInput
  tipo: TipoUpdateOneRequiredInput
  linea: LineaUpdateOneRequiredInput
  eje: EjeUpdateOneRequiredInput
  alcance: AlcanceUpdateOneRequiredInput
  estado: ESTADO
}

input ProyectoUpsertWithoutIntegrantesInput {
  update: ProyectoUpdateWithoutIntegrantesDataInput!
  create: ProyectoCreateWithoutIntegrantesInput!
}

input ProyectoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  codigo: String
  codigo_not: String
  codigo_in: [String!]
  codigo_not_in: [String!]
  codigo_lt: String
  codigo_lte: String
  codigo_gt: String
  codigo_gte: String
  codigo_contains: String
  codigo_not_contains: String
  codigo_starts_with: String
  codigo_not_starts_with: String
  codigo_ends_with: String
  codigo_not_ends_with: String
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  inicia: DateTime
  inicia_not: DateTime
  inicia_in: [DateTime!]
  inicia_not_in: [DateTime!]
  inicia_lt: DateTime
  inicia_lte: DateTime
  inicia_gt: DateTime
  inicia_gte: DateTime
  finaliza: DateTime
  finaliza_not: DateTime
  finaliza_in: [DateTime!]
  finaliza_not_in: [DateTime!]
  finaliza_lt: DateTime
  finaliza_lte: DateTime
  finaliza_gt: DateTime
  finaliza_gte: DateTime
  area: AreaWhereInput
  tipo: TipoWhereInput
  linea: LineaWhereInput
  eje: EjeWhereInput
  alcance: AlcanceWhereInput
  estado: ESTADO
  estado_not: ESTADO
  estado_in: [ESTADO!]
  estado_not_in: [ESTADO!]
  integrantes_every: IntegranteWhereInput
  integrantes_some: IntegranteWhereInput
  integrantes_none: IntegranteWhereInput
  AND: [ProyectoWhereInput!]
  OR: [ProyectoWhereInput!]
  NOT: [ProyectoWhereInput!]
}

input ProyectoWhereUniqueInput {
  id: ID
  codigo: String
  nombre: String
}

type Query {
  alcance(where: AlcanceWhereUniqueInput!): Alcance
  alcances(where: AlcanceWhereInput, orderBy: AlcanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Alcance]!
  alcancesConnection(where: AlcanceWhereInput, orderBy: AlcanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlcanceConnection!
  anno(where: AnnoWhereUniqueInput!): Anno
  annoes(where: AnnoWhereInput, orderBy: AnnoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Anno]!
  annoesConnection(where: AnnoWhereInput, orderBy: AnnoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnoConnection!
  area(where: AreaWhereUniqueInput!): Area
  areas(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Area]!
  areasConnection(where: AreaWhereInput, orderBy: AreaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AreaConnection!
  eje(where: EjeWhereUniqueInput!): Eje
  ejes(where: EjeWhereInput, orderBy: EjeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Eje]!
  ejesConnection(where: EjeWhereInput, orderBy: EjeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EjeConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  integrante(where: IntegranteWhereUniqueInput!): Integrante
  integrantes(where: IntegranteWhereInput, orderBy: IntegranteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Integrante]!
  integrantesConnection(where: IntegranteWhereInput, orderBy: IntegranteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IntegranteConnection!
  linea(where: LineaWhereUniqueInput!): Linea
  lineas(where: LineaWhereInput, orderBy: LineaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Linea]!
  lineasConnection(where: LineaWhereInput, orderBy: LineaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LineaConnection!
  mes(where: MesWhereUniqueInput!): Mes
  meses(where: MesWhereInput, orderBy: MesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mes]!
  mesesConnection(where: MesWhereInput, orderBy: MesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MesConnection!
  pago(where: PagoWhereUniqueInput!): Pago
  pagoes(where: PagoWhereInput, orderBy: PagoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pago]!
  pagoesConnection(where: PagoWhereInput, orderBy: PagoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PagoConnection!
  proyecto(where: ProyectoWhereUniqueInput!): Proyecto
  proyectoes(where: ProyectoWhereInput, orderBy: ProyectoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Proyecto]!
  proyectoesConnection(where: ProyectoWhereInput, orderBy: ProyectoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProyectoConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  tipo(where: TipoWhereUniqueInput!): Tipo
  tipoes(where: TipoWhereInput, orderBy: TipoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tipo]!
  tipoesConnection(where: TipoWhereInput, orderBy: TipoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TipoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  description: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  description: String
  users: UserCreateManyWithoutRolesInput
}

input RoleCreateManyWithoutUsersInput {
  create: [RoleCreateWithoutUsersInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateWithoutUsersInput {
  name: String!
  description: String
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
  description: String
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  name: String
  description: String
  users: UserUpdateManyWithoutRolesInput
}

input RoleUpdateManyMutationInput {
  name: String
  description: String
}

input RoleUpdateManyWithoutUsersInput {
  create: [RoleCreateWithoutUsersInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutUsersInput!]
}

input RoleUpdateWithoutUsersDataInput {
  name: String
  description: String
}

input RoleUpdateWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutUsersDataInput!
}

input RoleUpsertWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutUsersDataInput!
  create: RoleCreateWithoutUsersInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  alcance(where: AlcanceSubscriptionWhereInput): AlcanceSubscriptionPayload
  anno(where: AnnoSubscriptionWhereInput): AnnoSubscriptionPayload
  area(where: AreaSubscriptionWhereInput): AreaSubscriptionPayload
  eje(where: EjeSubscriptionWhereInput): EjeSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  integrante(where: IntegranteSubscriptionWhereInput): IntegranteSubscriptionPayload
  linea(where: LineaSubscriptionWhereInput): LineaSubscriptionPayload
  mes(where: MesSubscriptionWhereInput): MesSubscriptionPayload
  pago(where: PagoSubscriptionWhereInput): PagoSubscriptionPayload
  proyecto(where: ProyectoSubscriptionWhereInput): ProyectoSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  tipo(where: TipoSubscriptionWhereInput): TipoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tipo {
  id: ID!
  nombre: String!
}

type TipoConnection {
  pageInfo: PageInfo!
  edges: [TipoEdge]!
  aggregate: AggregateTipo!
}

input TipoCreateInput {
  nombre: String!
}

input TipoCreateOneInput {
  create: TipoCreateInput
  connect: TipoWhereUniqueInput
}

type TipoEdge {
  node: Tipo!
  cursor: String!
}

enum TipoOrderByInput {
  id_ASC
  id_DESC
  nombre_ASC
  nombre_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TipoPreviousValues {
  id: ID!
  nombre: String!
}

type TipoSubscriptionPayload {
  mutation: MutationType!
  node: Tipo
  updatedFields: [String!]
  previousValues: TipoPreviousValues
}

input TipoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TipoWhereInput
  AND: [TipoSubscriptionWhereInput!]
  OR: [TipoSubscriptionWhereInput!]
  NOT: [TipoSubscriptionWhereInput!]
}

input TipoUpdateDataInput {
  nombre: String
}

input TipoUpdateInput {
  nombre: String
}

input TipoUpdateManyMutationInput {
  nombre: String
}

input TipoUpdateOneRequiredInput {
  create: TipoCreateInput
  update: TipoUpdateDataInput
  upsert: TipoUpsertNestedInput
  connect: TipoWhereUniqueInput
}

input TipoUpsertNestedInput {
  update: TipoUpdateDataInput!
  create: TipoCreateInput!
}

input TipoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nombre: String
  nombre_not: String
  nombre_in: [String!]
  nombre_not_in: [String!]
  nombre_lt: String
  nombre_lte: String
  nombre_gt: String
  nombre_gte: String
  nombre_contains: String
  nombre_not_contains: String
  nombre_starts_with: String
  nombre_not_starts_with: String
  nombre_ends_with: String
  nombre_not_ends_with: String
  AND: [TipoWhereInput!]
  OR: [TipoWhereInput!]
  NOT: [TipoWhereInput!]
}

input TipoWhereUniqueInput {
  id: ID
  nombre: String
}

type User {
  id: ID!
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  fullname: String!
  employeeNumber: String!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
  integrantes(where: IntegranteWhereInput, orderBy: IntegranteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Integrante!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  fullname: String!
  employeeNumber: String!
  roles: RoleCreateManyWithoutUsersInput
  integrantes: IntegranteCreateManyWithoutUsuarioInput
}

input UserCreateManyWithoutRolesInput {
  create: [UserCreateWithoutRolesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutIntegrantesInput {
  create: UserCreateWithoutIntegrantesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutIntegrantesInput {
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  fullname: String!
  employeeNumber: String!
  roles: RoleCreateManyWithoutUsersInput
}

input UserCreateWithoutRolesInput {
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  fullname: String!
  employeeNumber: String!
  integrantes: IntegranteCreateManyWithoutUsuarioInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  fullname_ASC
  fullname_DESC
  employeeNumber_ASC
  employeeNumber_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  fullname: String!
  employeeNumber: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  firstname: String
  lastname: String
  fullname: String
  employeeNumber: String
  roles: RoleUpdateManyWithoutUsersInput
  integrantes: IntegranteUpdateManyWithoutUsuarioInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  firstname: String
  lastname: String
  fullname: String
  employeeNumber: String
}

input UserUpdateManyWithoutRolesInput {
  create: [UserCreateWithoutRolesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRolesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRolesInput!]
}

input UserUpdateOneRequiredWithoutIntegrantesInput {
  create: UserCreateWithoutIntegrantesInput
  update: UserUpdateWithoutIntegrantesDataInput
  upsert: UserUpsertWithoutIntegrantesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutIntegrantesDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  fullname: String
  employeeNumber: String
  roles: RoleUpdateManyWithoutUsersInput
}

input UserUpdateWithoutRolesDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  fullname: String
  employeeNumber: String
  integrantes: IntegranteUpdateManyWithoutUsuarioInput
}

input UserUpdateWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRolesDataInput!
}

input UserUpsertWithoutIntegrantesInput {
  update: UserUpdateWithoutIntegrantesDataInput!
  create: UserCreateWithoutIntegrantesInput!
}

input UserUpsertWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRolesDataInput!
  create: UserCreateWithoutRolesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  fullname: String
  fullname_not: String
  fullname_in: [String!]
  fullname_not_in: [String!]
  fullname_lt: String
  fullname_lte: String
  fullname_gt: String
  fullname_gte: String
  fullname_contains: String
  fullname_not_contains: String
  fullname_starts_with: String
  fullname_not_starts_with: String
  fullname_ends_with: String
  fullname_not_ends_with: String
  employeeNumber: String
  employeeNumber_not: String
  employeeNumber_in: [String!]
  employeeNumber_not_in: [String!]
  employeeNumber_lt: String
  employeeNumber_lte: String
  employeeNumber_gt: String
  employeeNumber_gte: String
  employeeNumber_contains: String
  employeeNumber_not_contains: String
  employeeNumber_starts_with: String
  employeeNumber_not_starts_with: String
  employeeNumber_ends_with: String
  employeeNumber_not_ends_with: String
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  integrantes_every: IntegranteWhereInput
  integrantes_some: IntegranteWhereInput
  integrantes_none: IntegranteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
  employeeNumber: String
}
`