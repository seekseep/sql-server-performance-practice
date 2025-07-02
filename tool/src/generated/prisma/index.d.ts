
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductStock
 * 
 */
export type ProductStock = $Result.DefaultSelection<Prisma.$ProductStockPayload>
/**
 * Model ReceivingAchievement
 * 
 */
export type ReceivingAchievement = $Result.DefaultSelection<Prisma.$ReceivingAchievementPayload>
/**
 * Model ReceivingAchievementDetail
 * 
 */
export type ReceivingAchievementDetail = $Result.DefaultSelection<Prisma.$ReceivingAchievementDetailPayload>
/**
 * Model ShipmentAchievement
 * 
 */
export type ShipmentAchievement = $Result.DefaultSelection<Prisma.$ShipmentAchievementPayload>
/**
 * Model ShipmentAchievementDetail
 * 
 */
export type ShipmentAchievementDetail = $Result.DefaultSelection<Prisma.$ShipmentAchievementDetailPayload>
/**
 * Model ShipmentPlan
 * 
 */
export type ShipmentPlan = $Result.DefaultSelection<Prisma.$ShipmentPlanPayload>
/**
 * Model ShipmentPlanDetail
 * 
 */
export type ShipmentPlanDetail = $Result.DefaultSelection<Prisma.$ShipmentPlanDetailPayload>
/**
 * Model TreatmentAchievement
 * 
 */
export type TreatmentAchievement = $Result.DefaultSelection<Prisma.$TreatmentAchievementPayload>
/**
 * Model TreatmentAchievementDetail
 * 
 */
export type TreatmentAchievementDetail = $Result.DefaultSelection<Prisma.$TreatmentAchievementDetailPayload>
/**
 * Model TreatmentPlan
 * 
 */
export type TreatmentPlan = $Result.DefaultSelection<Prisma.$TreatmentPlanPayload>
/**
 * Model TreatmentPlanDetail
 * 
 */
export type TreatmentPlanDetail = $Result.DefaultSelection<Prisma.$TreatmentPlanDetailPayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productStock`: Exposes CRUD operations for the **ProductStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductStocks
    * const productStocks = await prisma.productStock.findMany()
    * ```
    */
  get productStock(): Prisma.ProductStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receivingAchievement`: Exposes CRUD operations for the **ReceivingAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceivingAchievements
    * const receivingAchievements = await prisma.receivingAchievement.findMany()
    * ```
    */
  get receivingAchievement(): Prisma.ReceivingAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receivingAchievementDetail`: Exposes CRUD operations for the **ReceivingAchievementDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceivingAchievementDetails
    * const receivingAchievementDetails = await prisma.receivingAchievementDetail.findMany()
    * ```
    */
  get receivingAchievementDetail(): Prisma.ReceivingAchievementDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentAchievement`: Exposes CRUD operations for the **ShipmentAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentAchievements
    * const shipmentAchievements = await prisma.shipmentAchievement.findMany()
    * ```
    */
  get shipmentAchievement(): Prisma.ShipmentAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentAchievementDetail`: Exposes CRUD operations for the **ShipmentAchievementDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentAchievementDetails
    * const shipmentAchievementDetails = await prisma.shipmentAchievementDetail.findMany()
    * ```
    */
  get shipmentAchievementDetail(): Prisma.ShipmentAchievementDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentPlan`: Exposes CRUD operations for the **ShipmentPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentPlans
    * const shipmentPlans = await prisma.shipmentPlan.findMany()
    * ```
    */
  get shipmentPlan(): Prisma.ShipmentPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentPlanDetail`: Exposes CRUD operations for the **ShipmentPlanDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentPlanDetails
    * const shipmentPlanDetails = await prisma.shipmentPlanDetail.findMany()
    * ```
    */
  get shipmentPlanDetail(): Prisma.ShipmentPlanDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentAchievement`: Exposes CRUD operations for the **TreatmentAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentAchievements
    * const treatmentAchievements = await prisma.treatmentAchievement.findMany()
    * ```
    */
  get treatmentAchievement(): Prisma.TreatmentAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentAchievementDetail`: Exposes CRUD operations for the **TreatmentAchievementDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentAchievementDetails
    * const treatmentAchievementDetails = await prisma.treatmentAchievementDetail.findMany()
    * ```
    */
  get treatmentAchievementDetail(): Prisma.TreatmentAchievementDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentPlan`: Exposes CRUD operations for the **TreatmentPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentPlans
    * const treatmentPlans = await prisma.treatmentPlan.findMany()
    * ```
    */
  get treatmentPlan(): Prisma.TreatmentPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentPlanDetail`: Exposes CRUD operations for the **TreatmentPlanDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentPlanDetails
    * const treatmentPlanDetails = await prisma.treatmentPlanDetail.findMany()
    * ```
    */
  get treatmentPlanDetail(): Prisma.TreatmentPlanDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Employee: 'Employee',
    Product: 'Product',
    ProductStock: 'ProductStock',
    ReceivingAchievement: 'ReceivingAchievement',
    ReceivingAchievementDetail: 'ReceivingAchievementDetail',
    ShipmentAchievement: 'ShipmentAchievement',
    ShipmentAchievementDetail: 'ShipmentAchievementDetail',
    ShipmentPlan: 'ShipmentPlan',
    ShipmentPlanDetail: 'ShipmentPlanDetail',
    TreatmentAchievement: 'TreatmentAchievement',
    TreatmentAchievementDetail: 'TreatmentAchievementDetail',
    TreatmentPlan: 'TreatmentPlan',
    TreatmentPlanDetail: 'TreatmentPlanDetail',
    Warehouse: 'Warehouse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "employee" | "product" | "productStock" | "receivingAchievement" | "receivingAchievementDetail" | "shipmentAchievement" | "shipmentAchievementDetail" | "shipmentPlan" | "shipmentPlanDetail" | "treatmentAchievement" | "treatmentAchievementDetail" | "treatmentPlan" | "treatmentPlanDetail" | "warehouse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductStock: {
        payload: Prisma.$ProductStockPayload<ExtArgs>
        fields: Prisma.ProductStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findFirst: {
            args: Prisma.ProductStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findMany: {
            args: Prisma.ProductStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>[]
          }
          create: {
            args: Prisma.ProductStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          createMany: {
            args: Prisma.ProductStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          update: {
            args: Prisma.ProductStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          deleteMany: {
            args: Prisma.ProductStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          aggregate: {
            args: Prisma.ProductStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductStock>
          }
          groupBy: {
            args: Prisma.ProductStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductStockCountArgs<ExtArgs>
            result: $Utils.Optional<ProductStockCountAggregateOutputType> | number
          }
        }
      }
      ReceivingAchievement: {
        payload: Prisma.$ReceivingAchievementPayload<ExtArgs>
        fields: Prisma.ReceivingAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceivingAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceivingAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>
          }
          findFirst: {
            args: Prisma.ReceivingAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceivingAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>
          }
          findMany: {
            args: Prisma.ReceivingAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>[]
          }
          create: {
            args: Prisma.ReceivingAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>
          }
          createMany: {
            args: Prisma.ReceivingAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceivingAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>
          }
          update: {
            args: Prisma.ReceivingAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>
          }
          deleteMany: {
            args: Prisma.ReceivingAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceivingAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceivingAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementPayload>
          }
          aggregate: {
            args: Prisma.ReceivingAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceivingAchievement>
          }
          groupBy: {
            args: Prisma.ReceivingAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceivingAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceivingAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<ReceivingAchievementCountAggregateOutputType> | number
          }
        }
      }
      ReceivingAchievementDetail: {
        payload: Prisma.$ReceivingAchievementDetailPayload<ExtArgs>
        fields: Prisma.ReceivingAchievementDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceivingAchievementDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceivingAchievementDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>
          }
          findFirst: {
            args: Prisma.ReceivingAchievementDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceivingAchievementDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>
          }
          findMany: {
            args: Prisma.ReceivingAchievementDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>[]
          }
          create: {
            args: Prisma.ReceivingAchievementDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>
          }
          createMany: {
            args: Prisma.ReceivingAchievementDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReceivingAchievementDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>
          }
          update: {
            args: Prisma.ReceivingAchievementDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>
          }
          deleteMany: {
            args: Prisma.ReceivingAchievementDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceivingAchievementDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceivingAchievementDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivingAchievementDetailPayload>
          }
          aggregate: {
            args: Prisma.ReceivingAchievementDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceivingAchievementDetail>
          }
          groupBy: {
            args: Prisma.ReceivingAchievementDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceivingAchievementDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceivingAchievementDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ReceivingAchievementDetailCountAggregateOutputType> | number
          }
        }
      }
      ShipmentAchievement: {
        payload: Prisma.$ShipmentAchievementPayload<ExtArgs>
        fields: Prisma.ShipmentAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>
          }
          findFirst: {
            args: Prisma.ShipmentAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>
          }
          findMany: {
            args: Prisma.ShipmentAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>[]
          }
          create: {
            args: Prisma.ShipmentAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>
          }
          createMany: {
            args: Prisma.ShipmentAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>
          }
          update: {
            args: Prisma.ShipmentAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentAchievement>
          }
          groupBy: {
            args: Prisma.ShipmentAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentAchievementCountAggregateOutputType> | number
          }
        }
      }
      ShipmentAchievementDetail: {
        payload: Prisma.$ShipmentAchievementDetailPayload<ExtArgs>
        fields: Prisma.ShipmentAchievementDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentAchievementDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentAchievementDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>
          }
          findFirst: {
            args: Prisma.ShipmentAchievementDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentAchievementDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>
          }
          findMany: {
            args: Prisma.ShipmentAchievementDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>[]
          }
          create: {
            args: Prisma.ShipmentAchievementDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>
          }
          createMany: {
            args: Prisma.ShipmentAchievementDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentAchievementDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>
          }
          update: {
            args: Prisma.ShipmentAchievementDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentAchievementDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentAchievementDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentAchievementDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentAchievementDetailPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAchievementDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentAchievementDetail>
          }
          groupBy: {
            args: Prisma.ShipmentAchievementDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentAchievementDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentAchievementDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentAchievementDetailCountAggregateOutputType> | number
          }
        }
      }
      ShipmentPlan: {
        payload: Prisma.$ShipmentPlanPayload<ExtArgs>
        fields: Prisma.ShipmentPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>
          }
          findFirst: {
            args: Prisma.ShipmentPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>
          }
          findMany: {
            args: Prisma.ShipmentPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>[]
          }
          create: {
            args: Prisma.ShipmentPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>
          }
          createMany: {
            args: Prisma.ShipmentPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>
          }
          update: {
            args: Prisma.ShipmentPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanPayload>
          }
          aggregate: {
            args: Prisma.ShipmentPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentPlan>
          }
          groupBy: {
            args: Prisma.ShipmentPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentPlanCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentPlanCountAggregateOutputType> | number
          }
        }
      }
      ShipmentPlanDetail: {
        payload: Prisma.$ShipmentPlanDetailPayload<ExtArgs>
        fields: Prisma.ShipmentPlanDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentPlanDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentPlanDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>
          }
          findFirst: {
            args: Prisma.ShipmentPlanDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentPlanDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>
          }
          findMany: {
            args: Prisma.ShipmentPlanDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>[]
          }
          create: {
            args: Prisma.ShipmentPlanDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>
          }
          createMany: {
            args: Prisma.ShipmentPlanDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentPlanDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>
          }
          update: {
            args: Prisma.ShipmentPlanDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentPlanDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentPlanDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentPlanDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPlanDetailPayload>
          }
          aggregate: {
            args: Prisma.ShipmentPlanDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentPlanDetail>
          }
          groupBy: {
            args: Prisma.ShipmentPlanDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentPlanDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentPlanDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentPlanDetailCountAggregateOutputType> | number
          }
        }
      }
      TreatmentAchievement: {
        payload: Prisma.$TreatmentAchievementPayload<ExtArgs>
        fields: Prisma.TreatmentAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>
          }
          findFirst: {
            args: Prisma.TreatmentAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>
          }
          findMany: {
            args: Prisma.TreatmentAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>[]
          }
          create: {
            args: Prisma.TreatmentAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>
          }
          createMany: {
            args: Prisma.TreatmentAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreatmentAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>
          }
          update: {
            args: Prisma.TreatmentAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreatmentAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementPayload>
          }
          aggregate: {
            args: Prisma.TreatmentAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentAchievement>
          }
          groupBy: {
            args: Prisma.TreatmentAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentAchievementCountAggregateOutputType> | number
          }
        }
      }
      TreatmentAchievementDetail: {
        payload: Prisma.$TreatmentAchievementDetailPayload<ExtArgs>
        fields: Prisma.TreatmentAchievementDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentAchievementDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentAchievementDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>
          }
          findFirst: {
            args: Prisma.TreatmentAchievementDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentAchievementDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>
          }
          findMany: {
            args: Prisma.TreatmentAchievementDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>[]
          }
          create: {
            args: Prisma.TreatmentAchievementDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>
          }
          createMany: {
            args: Prisma.TreatmentAchievementDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreatmentAchievementDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>
          }
          update: {
            args: Prisma.TreatmentAchievementDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentAchievementDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentAchievementDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreatmentAchievementDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentAchievementDetailPayload>
          }
          aggregate: {
            args: Prisma.TreatmentAchievementDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentAchievementDetail>
          }
          groupBy: {
            args: Prisma.TreatmentAchievementDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentAchievementDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentAchievementDetailCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentAchievementDetailCountAggregateOutputType> | number
          }
        }
      }
      TreatmentPlan: {
        payload: Prisma.$TreatmentPlanPayload<ExtArgs>
        fields: Prisma.TreatmentPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>
          }
          findFirst: {
            args: Prisma.TreatmentPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>
          }
          findMany: {
            args: Prisma.TreatmentPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>[]
          }
          create: {
            args: Prisma.TreatmentPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>
          }
          createMany: {
            args: Prisma.TreatmentPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreatmentPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>
          }
          update: {
            args: Prisma.TreatmentPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreatmentPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanPayload>
          }
          aggregate: {
            args: Prisma.TreatmentPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentPlan>
          }
          groupBy: {
            args: Prisma.TreatmentPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentPlanCountAggregateOutputType> | number
          }
        }
      }
      TreatmentPlanDetail: {
        payload: Prisma.$TreatmentPlanDetailPayload<ExtArgs>
        fields: Prisma.TreatmentPlanDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentPlanDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentPlanDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>
          }
          findFirst: {
            args: Prisma.TreatmentPlanDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentPlanDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>
          }
          findMany: {
            args: Prisma.TreatmentPlanDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>[]
          }
          create: {
            args: Prisma.TreatmentPlanDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>
          }
          createMany: {
            args: Prisma.TreatmentPlanDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreatmentPlanDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>
          }
          update: {
            args: Prisma.TreatmentPlanDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentPlanDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentPlanDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreatmentPlanDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPlanDetailPayload>
          }
          aggregate: {
            args: Prisma.TreatmentPlanDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentPlanDetail>
          }
          groupBy: {
            args: Prisma.TreatmentPlanDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentPlanDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentPlanDetailCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentPlanDetailCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    employee?: EmployeeOmit
    product?: ProductOmit
    productStock?: ProductStockOmit
    receivingAchievement?: ReceivingAchievementOmit
    receivingAchievementDetail?: ReceivingAchievementDetailOmit
    shipmentAchievement?: ShipmentAchievementOmit
    shipmentAchievementDetail?: ShipmentAchievementDetailOmit
    shipmentPlan?: ShipmentPlanOmit
    shipmentPlanDetail?: ShipmentPlanDetailOmit
    treatmentAchievement?: TreatmentAchievementOmit
    treatmentAchievementDetail?: TreatmentAchievementDetailOmit
    treatmentPlan?: TreatmentPlanOmit
    treatmentPlanDetail?: TreatmentPlanDetailOmit
    warehouse?: WarehouseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    ShipmentPlan: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShipmentPlan?: boolean | CustomerCountOutputTypeCountShipmentPlanArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountShipmentPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentPlanWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    ReceivingAchievement: number
    ShipmentAchievement: number
    TreatmentAchievement: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReceivingAchievement?: boolean | EmployeeCountOutputTypeCountReceivingAchievementArgs
    ShipmentAchievement?: boolean | EmployeeCountOutputTypeCountShipmentAchievementArgs
    TreatmentAchievement?: boolean | EmployeeCountOutputTypeCountTreatmentAchievementArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountReceivingAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingAchievementWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountShipmentAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentAchievementWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTreatmentAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ProductStock: number
    ShipmentPlanDetail: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock?: boolean | ProductCountOutputTypeCountProductStockArgs
    ShipmentPlanDetail?: boolean | ProductCountOutputTypeCountShipmentPlanDetailArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountShipmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentPlanDetailWhereInput
  }


  /**
   * Count Type ProductStockCountOutputType
   */

  export type ProductStockCountOutputType = {
    ReceivingAchievementDetail: number
    ShipmentAchievementDetail: number
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: number
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock: number
    TreatmentPlanDetail: number
  }

  export type ProductStockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReceivingAchievementDetail?: boolean | ProductStockCountOutputTypeCountReceivingAchievementDetailArgs
    ShipmentAchievementDetail?: boolean | ProductStockCountOutputTypeCountShipmentAchievementDetailArgs
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: boolean | ProductStockCountOutputTypeCountTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: boolean | ProductStockCountOutputTypeCountTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs
    TreatmentPlanDetail?: boolean | ProductStockCountOutputTypeCountTreatmentPlanDetailArgs
  }

  // Custom InputTypes
  /**
   * ProductStockCountOutputType without action
   */
  export type ProductStockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStockCountOutputType
     */
    select?: ProductStockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductStockCountOutputType without action
   */
  export type ProductStockCountOutputTypeCountReceivingAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingAchievementDetailWhereInput
  }

  /**
   * ProductStockCountOutputType without action
   */
  export type ProductStockCountOutputTypeCountShipmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentAchievementDetailWhereInput
  }

  /**
   * ProductStockCountOutputType without action
   */
  export type ProductStockCountOutputTypeCountTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementDetailWhereInput
  }

  /**
   * ProductStockCountOutputType without action
   */
  export type ProductStockCountOutputTypeCountTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementDetailWhereInput
  }

  /**
   * ProductStockCountOutputType without action
   */
  export type ProductStockCountOutputTypeCountTreatmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentPlanDetailWhereInput
  }


  /**
   * Count Type ReceivingAchievementCountOutputType
   */

  export type ReceivingAchievementCountOutputType = {
    ReceivingAchievementDetail: number
  }

  export type ReceivingAchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReceivingAchievementDetail?: boolean | ReceivingAchievementCountOutputTypeCountReceivingAchievementDetailArgs
  }

  // Custom InputTypes
  /**
   * ReceivingAchievementCountOutputType without action
   */
  export type ReceivingAchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementCountOutputType
     */
    select?: ReceivingAchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceivingAchievementCountOutputType without action
   */
  export type ReceivingAchievementCountOutputTypeCountReceivingAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingAchievementDetailWhereInput
  }


  /**
   * Count Type ShipmentAchievementCountOutputType
   */

  export type ShipmentAchievementCountOutputType = {
    ShipmentAchievementDetail: number
  }

  export type ShipmentAchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShipmentAchievementDetail?: boolean | ShipmentAchievementCountOutputTypeCountShipmentAchievementDetailArgs
  }

  // Custom InputTypes
  /**
   * ShipmentAchievementCountOutputType without action
   */
  export type ShipmentAchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementCountOutputType
     */
    select?: ShipmentAchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentAchievementCountOutputType without action
   */
  export type ShipmentAchievementCountOutputTypeCountShipmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentAchievementDetailWhereInput
  }


  /**
   * Count Type ShipmentPlanCountOutputType
   */

  export type ShipmentPlanCountOutputType = {
    ShipmentPlanDetail: number
  }

  export type ShipmentPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShipmentPlanDetail?: boolean | ShipmentPlanCountOutputTypeCountShipmentPlanDetailArgs
  }

  // Custom InputTypes
  /**
   * ShipmentPlanCountOutputType without action
   */
  export type ShipmentPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanCountOutputType
     */
    select?: ShipmentPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentPlanCountOutputType without action
   */
  export type ShipmentPlanCountOutputTypeCountShipmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentPlanDetailWhereInput
  }


  /**
   * Count Type ShipmentPlanDetailCountOutputType
   */

  export type ShipmentPlanDetailCountOutputType = {
    ShipmentAchievementDetail: number
  }

  export type ShipmentPlanDetailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShipmentAchievementDetail?: boolean | ShipmentPlanDetailCountOutputTypeCountShipmentAchievementDetailArgs
  }

  // Custom InputTypes
  /**
   * ShipmentPlanDetailCountOutputType without action
   */
  export type ShipmentPlanDetailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetailCountOutputType
     */
    select?: ShipmentPlanDetailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentPlanDetailCountOutputType without action
   */
  export type ShipmentPlanDetailCountOutputTypeCountShipmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentAchievementDetailWhereInput
  }


  /**
   * Count Type TreatmentAchievementCountOutputType
   */

  export type TreatmentAchievementCountOutputType = {
    TreatmentAchievementDetail: number
  }

  export type TreatmentAchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TreatmentAchievementDetail?: boolean | TreatmentAchievementCountOutputTypeCountTreatmentAchievementDetailArgs
  }

  // Custom InputTypes
  /**
   * TreatmentAchievementCountOutputType without action
   */
  export type TreatmentAchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementCountOutputType
     */
    select?: TreatmentAchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentAchievementCountOutputType without action
   */
  export type TreatmentAchievementCountOutputTypeCountTreatmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementDetailWhereInput
  }


  /**
   * Count Type TreatmentPlanCountOutputType
   */

  export type TreatmentPlanCountOutputType = {
    TreatmentPlanDetail: number
  }

  export type TreatmentPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TreatmentPlanDetail?: boolean | TreatmentPlanCountOutputTypeCountTreatmentPlanDetailArgs
  }

  // Custom InputTypes
  /**
   * TreatmentPlanCountOutputType without action
   */
  export type TreatmentPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanCountOutputType
     */
    select?: TreatmentPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentPlanCountOutputType without action
   */
  export type TreatmentPlanCountOutputTypeCountTreatmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentPlanDetailWhereInput
  }


  /**
   * Count Type TreatmentPlanDetailCountOutputType
   */

  export type TreatmentPlanDetailCountOutputType = {
    TreatmentAchievementDetail: number
  }

  export type TreatmentPlanDetailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TreatmentAchievementDetail?: boolean | TreatmentPlanDetailCountOutputTypeCountTreatmentAchievementDetailArgs
  }

  // Custom InputTypes
  /**
   * TreatmentPlanDetailCountOutputType without action
   */
  export type TreatmentPlanDetailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetailCountOutputType
     */
    select?: TreatmentPlanDetailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentPlanDetailCountOutputType without action
   */
  export type TreatmentPlanDetailCountOutputTypeCountTreatmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementDetailWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    ProductStock: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock?: boolean | WarehouseCountOutputTypeCountProductStockArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    Id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    Id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Address: string | null
    Email: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Address: string | null
    Email: string | null
  }

  export type CustomerCountAggregateOutputType = {
    Id: number
    Name: number
    Address: number
    Email: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    Id?: true
  }

  export type CustomerSumAggregateInputType = {
    Id?: true
  }

  export type CustomerMinAggregateInputType = {
    Id?: true
    Name?: true
    Address?: true
    Email?: true
  }

  export type CustomerMaxAggregateInputType = {
    Id?: true
    Name?: true
    Address?: true
    Email?: true
  }

  export type CustomerCountAggregateInputType = {
    Id?: true
    Name?: true
    Address?: true
    Email?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    Id: number
    Name: string
    Address: string
    Email: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Address?: boolean
    Email?: boolean
    ShipmentPlan?: boolean | Customer$ShipmentPlanArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    Id?: boolean
    Name?: boolean
    Address?: boolean
    Email?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Address" | "Email", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShipmentPlan?: boolean | Customer$ShipmentPlanArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      ShipmentPlan: Prisma.$ShipmentPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
      Address: string
      Email: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ShipmentPlan<T extends Customer$ShipmentPlanArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ShipmentPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly Id: FieldRef<"Customer", 'Int'>
    readonly Name: FieldRef<"Customer", 'String'>
    readonly Address: FieldRef<"Customer", 'String'>
    readonly Email: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.ShipmentPlan
   */
  export type Customer$ShipmentPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    where?: ShipmentPlanWhereInput
    orderBy?: ShipmentPlanOrderByWithRelationInput | ShipmentPlanOrderByWithRelationInput[]
    cursor?: ShipmentPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentPlanScalarFieldEnum | ShipmentPlanScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    Id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    Id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    Id: number | null
    Name: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    Id: number
    Name: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    Id?: true
  }

  export type EmployeeSumAggregateInputType = {
    Id?: true
  }

  export type EmployeeMinAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type EmployeeMaxAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type EmployeeCountAggregateInputType = {
    Id?: true
    Name?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    Id: number
    Name: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    ReceivingAchievement?: boolean | Employee$ReceivingAchievementArgs<ExtArgs>
    ShipmentAchievement?: boolean | Employee$ShipmentAchievementArgs<ExtArgs>
    TreatmentAchievement?: boolean | Employee$TreatmentAchievementArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    Id?: boolean
    Name?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReceivingAchievement?: boolean | Employee$ReceivingAchievementArgs<ExtArgs>
    ShipmentAchievement?: boolean | Employee$ShipmentAchievementArgs<ExtArgs>
    TreatmentAchievement?: boolean | Employee$TreatmentAchievementArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      ReceivingAchievement: Prisma.$ReceivingAchievementPayload<ExtArgs>[]
      ShipmentAchievement: Prisma.$ShipmentAchievementPayload<ExtArgs>[]
      TreatmentAchievement: Prisma.$TreatmentAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ReceivingAchievement<T extends Employee$ReceivingAchievementArgs<ExtArgs> = {}>(args?: Subset<T, Employee$ReceivingAchievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ShipmentAchievement<T extends Employee$ShipmentAchievementArgs<ExtArgs> = {}>(args?: Subset<T, Employee$ShipmentAchievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TreatmentAchievement<T extends Employee$TreatmentAchievementArgs<ExtArgs> = {}>(args?: Subset<T, Employee$TreatmentAchievementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly Id: FieldRef<"Employee", 'Int'>
    readonly Name: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.ReceivingAchievement
   */
  export type Employee$ReceivingAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    where?: ReceivingAchievementWhereInput
    orderBy?: ReceivingAchievementOrderByWithRelationInput | ReceivingAchievementOrderByWithRelationInput[]
    cursor?: ReceivingAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceivingAchievementScalarFieldEnum | ReceivingAchievementScalarFieldEnum[]
  }

  /**
   * Employee.ShipmentAchievement
   */
  export type Employee$ShipmentAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    where?: ShipmentAchievementWhereInput
    orderBy?: ShipmentAchievementOrderByWithRelationInput | ShipmentAchievementOrderByWithRelationInput[]
    cursor?: ShipmentAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentAchievementScalarFieldEnum | ShipmentAchievementScalarFieldEnum[]
  }

  /**
   * Employee.TreatmentAchievement
   */
  export type Employee$TreatmentAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    where?: TreatmentAchievementWhereInput
    orderBy?: TreatmentAchievementOrderByWithRelationInput | TreatmentAchievementOrderByWithRelationInput[]
    cursor?: TreatmentAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentAchievementScalarFieldEnum | TreatmentAchievementScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    Id: number | null
  }

  export type ProductSumAggregateOutputType = {
    Id: number | null
  }

  export type ProductMinAggregateOutputType = {
    Id: number | null
    Name: string | null
  }

  export type ProductMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
  }

  export type ProductCountAggregateOutputType = {
    Id: number
    Name: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    Id?: true
  }

  export type ProductSumAggregateInputType = {
    Id?: true
  }

  export type ProductMinAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type ProductMaxAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type ProductCountAggregateInputType = {
    Id?: true
    Name?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    Id: number
    Name: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    ProductStock?: boolean | Product$ProductStockArgs<ExtArgs>
    ShipmentPlanDetail?: boolean | Product$ShipmentPlanDetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    Id?: boolean
    Name?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock?: boolean | Product$ProductStockArgs<ExtArgs>
    ShipmentPlanDetail?: boolean | Product$ShipmentPlanDetailArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      ProductStock: Prisma.$ProductStockPayload<ExtArgs>[]
      ShipmentPlanDetail: Prisma.$ShipmentPlanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductStock<T extends Product$ProductStockArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ShipmentPlanDetail<T extends Product$ShipmentPlanDetailArgs<ExtArgs> = {}>(args?: Subset<T, Product$ShipmentPlanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly Id: FieldRef<"Product", 'Int'>
    readonly Name: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.ProductStock
   */
  export type Product$ProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * Product.ShipmentPlanDetail
   */
  export type Product$ShipmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    where?: ShipmentPlanDetailWhereInput
    orderBy?: ShipmentPlanDetailOrderByWithRelationInput | ShipmentPlanDetailOrderByWithRelationInput[]
    cursor?: ShipmentPlanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentPlanDetailScalarFieldEnum | ShipmentPlanDetailScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductStock
   */

  export type AggregateProductStock = {
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  export type ProductStockAvgAggregateOutputType = {
    Id: number | null
    ProductId: number | null
    WarehouseId: number | null
    Used: number | null
  }

  export type ProductStockSumAggregateOutputType = {
    Id: number | null
    ProductId: number | null
    WarehouseId: number | null
    Used: number | null
  }

  export type ProductStockMinAggregateOutputType = {
    Id: number | null
    ProductId: number | null
    WarehouseId: number | null
    Used: number | null
  }

  export type ProductStockMaxAggregateOutputType = {
    Id: number | null
    ProductId: number | null
    WarehouseId: number | null
    Used: number | null
  }

  export type ProductStockCountAggregateOutputType = {
    Id: number
    ProductId: number
    WarehouseId: number
    Used: number
    _all: number
  }


  export type ProductStockAvgAggregateInputType = {
    Id?: true
    ProductId?: true
    WarehouseId?: true
    Used?: true
  }

  export type ProductStockSumAggregateInputType = {
    Id?: true
    ProductId?: true
    WarehouseId?: true
    Used?: true
  }

  export type ProductStockMinAggregateInputType = {
    Id?: true
    ProductId?: true
    WarehouseId?: true
    Used?: true
  }

  export type ProductStockMaxAggregateInputType = {
    Id?: true
    ProductId?: true
    WarehouseId?: true
    Used?: true
  }

  export type ProductStockCountAggregateInputType = {
    Id?: true
    ProductId?: true
    WarehouseId?: true
    Used?: true
    _all?: true
  }

  export type ProductStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStock to aggregate.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductStocks
    **/
    _count?: true | ProductStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductStockMaxAggregateInputType
  }

  export type GetProductStockAggregateType<T extends ProductStockAggregateArgs> = {
        [P in keyof T & keyof AggregateProductStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductStock[P]>
      : GetScalarType<T[P], AggregateProductStock[P]>
  }




  export type ProductStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithAggregationInput | ProductStockOrderByWithAggregationInput[]
    by: ProductStockScalarFieldEnum[] | ProductStockScalarFieldEnum
    having?: ProductStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductStockCountAggregateInputType | true
    _avg?: ProductStockAvgAggregateInputType
    _sum?: ProductStockSumAggregateInputType
    _min?: ProductStockMinAggregateInputType
    _max?: ProductStockMaxAggregateInputType
  }

  export type ProductStockGroupByOutputType = {
    Id: number
    ProductId: number
    WarehouseId: number
    Used: number
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  type GetProductStockGroupByPayload<T extends ProductStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
            : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
        }
      >
    >


  export type ProductStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ProductId?: boolean
    WarehouseId?: boolean
    Used?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    ReceivingAchievementDetail?: boolean | ProductStock$ReceivingAchievementDetailArgs<ExtArgs>
    ShipmentAchievementDetail?: boolean | ProductStock$ShipmentAchievementDetailArgs<ExtArgs>
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: boolean | ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs<ExtArgs>
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: boolean | ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs<ExtArgs>
    TreatmentPlanDetail?: boolean | ProductStock$TreatmentPlanDetailArgs<ExtArgs>
    _count?: boolean | ProductStockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productStock"]>



  export type ProductStockSelectScalar = {
    Id?: boolean
    ProductId?: boolean
    WarehouseId?: boolean
    Used?: boolean
  }

  export type ProductStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ProductId" | "WarehouseId" | "Used", ExtArgs["result"]["productStock"]>
  export type ProductStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    Warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    ReceivingAchievementDetail?: boolean | ProductStock$ReceivingAchievementDetailArgs<ExtArgs>
    ShipmentAchievementDetail?: boolean | ProductStock$ShipmentAchievementDetailArgs<ExtArgs>
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: boolean | ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs<ExtArgs>
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: boolean | ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs<ExtArgs>
    TreatmentPlanDetail?: boolean | ProductStock$TreatmentPlanDetailArgs<ExtArgs>
    _count?: boolean | ProductStockCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductStock"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      Warehouse: Prisma.$WarehousePayload<ExtArgs>
      ReceivingAchievementDetail: Prisma.$ReceivingAchievementDetailPayload<ExtArgs>[]
      ShipmentAchievementDetail: Prisma.$ShipmentAchievementDetailPayload<ExtArgs>[]
      TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: Prisma.$TreatmentAchievementDetailPayload<ExtArgs>[]
      TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock: Prisma.$TreatmentAchievementDetailPayload<ExtArgs>[]
      TreatmentPlanDetail: Prisma.$TreatmentPlanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ProductId: number
      WarehouseId: number
      Used: number
    }, ExtArgs["result"]["productStock"]>
    composites: {}
  }

  type ProductStockGetPayload<S extends boolean | null | undefined | ProductStockDefaultArgs> = $Result.GetResult<Prisma.$ProductStockPayload, S>

  type ProductStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductStockCountAggregateInputType | true
    }

  export interface ProductStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductStock'], meta: { name: 'ProductStock' } }
    /**
     * Find zero or one ProductStock that matches the filter.
     * @param {ProductStockFindUniqueArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductStockFindUniqueArgs>(args: SelectSubset<T, ProductStockFindUniqueArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductStockFindUniqueOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductStockFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductStockFindFirstArgs>(args?: SelectSubset<T, ProductStockFindFirstArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductStockFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductStocks
     * const productStocks = await prisma.productStock.findMany()
     * 
     * // Get first 10 ProductStocks
     * const productStocks = await prisma.productStock.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productStockWithIdOnly = await prisma.productStock.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ProductStockFindManyArgs>(args?: SelectSubset<T, ProductStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductStock.
     * @param {ProductStockCreateArgs} args - Arguments to create a ProductStock.
     * @example
     * // Create one ProductStock
     * const ProductStock = await prisma.productStock.create({
     *   data: {
     *     // ... data to create a ProductStock
     *   }
     * })
     * 
     */
    create<T extends ProductStockCreateArgs>(args: SelectSubset<T, ProductStockCreateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductStocks.
     * @param {ProductStockCreateManyArgs} args - Arguments to create many ProductStocks.
     * @example
     * // Create many ProductStocks
     * const productStock = await prisma.productStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductStockCreateManyArgs>(args?: SelectSubset<T, ProductStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductStock.
     * @param {ProductStockDeleteArgs} args - Arguments to delete one ProductStock.
     * @example
     * // Delete one ProductStock
     * const ProductStock = await prisma.productStock.delete({
     *   where: {
     *     // ... filter to delete one ProductStock
     *   }
     * })
     * 
     */
    delete<T extends ProductStockDeleteArgs>(args: SelectSubset<T, ProductStockDeleteArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductStock.
     * @param {ProductStockUpdateArgs} args - Arguments to update one ProductStock.
     * @example
     * // Update one ProductStock
     * const productStock = await prisma.productStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductStockUpdateArgs>(args: SelectSubset<T, ProductStockUpdateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductStocks.
     * @param {ProductStockDeleteManyArgs} args - Arguments to filter ProductStocks to delete.
     * @example
     * // Delete a few ProductStocks
     * const { count } = await prisma.productStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductStockDeleteManyArgs>(args?: SelectSubset<T, ProductStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductStocks
     * const productStock = await prisma.productStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductStockUpdateManyArgs>(args: SelectSubset<T, ProductStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductStock.
     * @param {ProductStockUpsertArgs} args - Arguments to update or create a ProductStock.
     * @example
     * // Update or create a ProductStock
     * const productStock = await prisma.productStock.upsert({
     *   create: {
     *     // ... data to create a ProductStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductStock we want to update
     *   }
     * })
     */
    upsert<T extends ProductStockUpsertArgs>(args: SelectSubset<T, ProductStockUpsertArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockCountArgs} args - Arguments to filter ProductStocks to count.
     * @example
     * // Count the number of ProductStocks
     * const count = await prisma.productStock.count({
     *   where: {
     *     // ... the filter for the ProductStocks we want to count
     *   }
     * })
    **/
    count<T extends ProductStockCountArgs>(
      args?: Subset<T, ProductStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductStockAggregateArgs>(args: Subset<T, ProductStockAggregateArgs>): Prisma.PrismaPromise<GetProductStockAggregateType<T>>

    /**
     * Group by ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductStockGroupByArgs['orderBy'] }
        : { orderBy?: ProductStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductStock model
   */
  readonly fields: ProductStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReceivingAchievementDetail<T extends ProductStock$ReceivingAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProductStock$ReceivingAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ShipmentAchievementDetail<T extends ProductStock$ShipmentAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProductStock$ShipmentAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock<T extends ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs<ExtArgs> = {}>(args?: Subset<T, ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock<T extends ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs<ExtArgs> = {}>(args?: Subset<T, ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TreatmentPlanDetail<T extends ProductStock$TreatmentPlanDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProductStock$TreatmentPlanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductStock model
   */
  interface ProductStockFieldRefs {
    readonly Id: FieldRef<"ProductStock", 'Int'>
    readonly ProductId: FieldRef<"ProductStock", 'Int'>
    readonly WarehouseId: FieldRef<"ProductStock", 'Int'>
    readonly Used: FieldRef<"ProductStock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductStock findUnique
   */
  export type ProductStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findUniqueOrThrow
   */
  export type ProductStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findFirst
   */
  export type ProductStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findFirstOrThrow
   */
  export type ProductStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findMany
   */
  export type ProductStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStocks to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock create
   */
  export type ProductStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductStock.
     */
    data: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
  }

  /**
   * ProductStock createMany
   */
  export type ProductStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductStocks.
     */
    data: ProductStockCreateManyInput | ProductStockCreateManyInput[]
  }

  /**
   * ProductStock update
   */
  export type ProductStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductStock.
     */
    data: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
    /**
     * Choose, which ProductStock to update.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock updateMany
   */
  export type ProductStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductStocks.
     */
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyInput>
    /**
     * Filter which ProductStocks to update
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to update.
     */
    limit?: number
  }

  /**
   * ProductStock upsert
   */
  export type ProductStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductStock to update in case it exists.
     */
    where: ProductStockWhereUniqueInput
    /**
     * In case the ProductStock found by the `where` argument doesn't exist, create a new ProductStock with this data.
     */
    create: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
    /**
     * In case the ProductStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
  }

  /**
   * ProductStock delete
   */
  export type ProductStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter which ProductStock to delete.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock deleteMany
   */
  export type ProductStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStocks to delete
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to delete.
     */
    limit?: number
  }

  /**
   * ProductStock.ReceivingAchievementDetail
   */
  export type ProductStock$ReceivingAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    where?: ReceivingAchievementDetailWhereInput
    orderBy?: ReceivingAchievementDetailOrderByWithRelationInput | ReceivingAchievementDetailOrderByWithRelationInput[]
    cursor?: ReceivingAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceivingAchievementDetailScalarFieldEnum | ReceivingAchievementDetailScalarFieldEnum[]
  }

  /**
   * ProductStock.ShipmentAchievementDetail
   */
  export type ProductStock$ShipmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    where?: ShipmentAchievementDetailWhereInput
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentAchievementDetailScalarFieldEnum | ShipmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ProductStock.TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock
   */
  export type ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    where?: TreatmentAchievementDetailWhereInput
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ProductStock.TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock
   */
  export type ProductStock$TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    where?: TreatmentAchievementDetailWhereInput
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ProductStock.TreatmentPlanDetail
   */
  export type ProductStock$TreatmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    where?: TreatmentPlanDetailWhereInput
    orderBy?: TreatmentPlanDetailOrderByWithRelationInput | TreatmentPlanDetailOrderByWithRelationInput[]
    cursor?: TreatmentPlanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentPlanDetailScalarFieldEnum | TreatmentPlanDetailScalarFieldEnum[]
  }

  /**
   * ProductStock without action
   */
  export type ProductStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
  }


  /**
   * Model ReceivingAchievement
   */

  export type AggregateReceivingAchievement = {
    _count: ReceivingAchievementCountAggregateOutputType | null
    _avg: ReceivingAchievementAvgAggregateOutputType | null
    _sum: ReceivingAchievementSumAggregateOutputType | null
    _min: ReceivingAchievementMinAggregateOutputType | null
    _max: ReceivingAchievementMaxAggregateOutputType | null
  }

  export type ReceivingAchievementAvgAggregateOutputType = {
    Id: number | null
    EmployeeId: number | null
  }

  export type ReceivingAchievementSumAggregateOutputType = {
    Id: number | null
    EmployeeId: number | null
  }

  export type ReceivingAchievementMinAggregateOutputType = {
    Id: number | null
    ReceivedAt: Date | null
    EmployeeId: number | null
  }

  export type ReceivingAchievementMaxAggregateOutputType = {
    Id: number | null
    ReceivedAt: Date | null
    EmployeeId: number | null
  }

  export type ReceivingAchievementCountAggregateOutputType = {
    Id: number
    ReceivedAt: number
    EmployeeId: number
    _all: number
  }


  export type ReceivingAchievementAvgAggregateInputType = {
    Id?: true
    EmployeeId?: true
  }

  export type ReceivingAchievementSumAggregateInputType = {
    Id?: true
    EmployeeId?: true
  }

  export type ReceivingAchievementMinAggregateInputType = {
    Id?: true
    ReceivedAt?: true
    EmployeeId?: true
  }

  export type ReceivingAchievementMaxAggregateInputType = {
    Id?: true
    ReceivedAt?: true
    EmployeeId?: true
  }

  export type ReceivingAchievementCountAggregateInputType = {
    Id?: true
    ReceivedAt?: true
    EmployeeId?: true
    _all?: true
  }

  export type ReceivingAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingAchievement to aggregate.
     */
    where?: ReceivingAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievements to fetch.
     */
    orderBy?: ReceivingAchievementOrderByWithRelationInput | ReceivingAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceivingAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceivingAchievements
    **/
    _count?: true | ReceivingAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceivingAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceivingAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceivingAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceivingAchievementMaxAggregateInputType
  }

  export type GetReceivingAchievementAggregateType<T extends ReceivingAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateReceivingAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceivingAchievement[P]>
      : GetScalarType<T[P], AggregateReceivingAchievement[P]>
  }




  export type ReceivingAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingAchievementWhereInput
    orderBy?: ReceivingAchievementOrderByWithAggregationInput | ReceivingAchievementOrderByWithAggregationInput[]
    by: ReceivingAchievementScalarFieldEnum[] | ReceivingAchievementScalarFieldEnum
    having?: ReceivingAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceivingAchievementCountAggregateInputType | true
    _avg?: ReceivingAchievementAvgAggregateInputType
    _sum?: ReceivingAchievementSumAggregateInputType
    _min?: ReceivingAchievementMinAggregateInputType
    _max?: ReceivingAchievementMaxAggregateInputType
  }

  export type ReceivingAchievementGroupByOutputType = {
    Id: number
    ReceivedAt: Date
    EmployeeId: number
    _count: ReceivingAchievementCountAggregateOutputType | null
    _avg: ReceivingAchievementAvgAggregateOutputType | null
    _sum: ReceivingAchievementSumAggregateOutputType | null
    _min: ReceivingAchievementMinAggregateOutputType | null
    _max: ReceivingAchievementMaxAggregateOutputType | null
  }

  type GetReceivingAchievementGroupByPayload<T extends ReceivingAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceivingAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceivingAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceivingAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], ReceivingAchievementGroupByOutputType[P]>
        }
      >
    >


  export type ReceivingAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ReceivedAt?: boolean
    EmployeeId?: boolean
    Employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    ReceivingAchievementDetail?: boolean | ReceivingAchievement$ReceivingAchievementDetailArgs<ExtArgs>
    _count?: boolean | ReceivingAchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivingAchievement"]>



  export type ReceivingAchievementSelectScalar = {
    Id?: boolean
    ReceivedAt?: boolean
    EmployeeId?: boolean
  }

  export type ReceivingAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ReceivedAt" | "EmployeeId", ExtArgs["result"]["receivingAchievement"]>
  export type ReceivingAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    ReceivingAchievementDetail?: boolean | ReceivingAchievement$ReceivingAchievementDetailArgs<ExtArgs>
    _count?: boolean | ReceivingAchievementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReceivingAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceivingAchievement"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs>
      ReceivingAchievementDetail: Prisma.$ReceivingAchievementDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ReceivedAt: Date
      EmployeeId: number
    }, ExtArgs["result"]["receivingAchievement"]>
    composites: {}
  }

  type ReceivingAchievementGetPayload<S extends boolean | null | undefined | ReceivingAchievementDefaultArgs> = $Result.GetResult<Prisma.$ReceivingAchievementPayload, S>

  type ReceivingAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceivingAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceivingAchievementCountAggregateInputType | true
    }

  export interface ReceivingAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceivingAchievement'], meta: { name: 'ReceivingAchievement' } }
    /**
     * Find zero or one ReceivingAchievement that matches the filter.
     * @param {ReceivingAchievementFindUniqueArgs} args - Arguments to find a ReceivingAchievement
     * @example
     * // Get one ReceivingAchievement
     * const receivingAchievement = await prisma.receivingAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceivingAchievementFindUniqueArgs>(args: SelectSubset<T, ReceivingAchievementFindUniqueArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceivingAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceivingAchievementFindUniqueOrThrowArgs} args - Arguments to find a ReceivingAchievement
     * @example
     * // Get one ReceivingAchievement
     * const receivingAchievement = await prisma.receivingAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceivingAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceivingAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementFindFirstArgs} args - Arguments to find a ReceivingAchievement
     * @example
     * // Get one ReceivingAchievement
     * const receivingAchievement = await prisma.receivingAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceivingAchievementFindFirstArgs>(args?: SelectSubset<T, ReceivingAchievementFindFirstArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementFindFirstOrThrowArgs} args - Arguments to find a ReceivingAchievement
     * @example
     * // Get one ReceivingAchievement
     * const receivingAchievement = await prisma.receivingAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceivingAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceivingAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceivingAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceivingAchievements
     * const receivingAchievements = await prisma.receivingAchievement.findMany()
     * 
     * // Get first 10 ReceivingAchievements
     * const receivingAchievements = await prisma.receivingAchievement.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const receivingAchievementWithIdOnly = await prisma.receivingAchievement.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ReceivingAchievementFindManyArgs>(args?: SelectSubset<T, ReceivingAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceivingAchievement.
     * @param {ReceivingAchievementCreateArgs} args - Arguments to create a ReceivingAchievement.
     * @example
     * // Create one ReceivingAchievement
     * const ReceivingAchievement = await prisma.receivingAchievement.create({
     *   data: {
     *     // ... data to create a ReceivingAchievement
     *   }
     * })
     * 
     */
    create<T extends ReceivingAchievementCreateArgs>(args: SelectSubset<T, ReceivingAchievementCreateArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceivingAchievements.
     * @param {ReceivingAchievementCreateManyArgs} args - Arguments to create many ReceivingAchievements.
     * @example
     * // Create many ReceivingAchievements
     * const receivingAchievement = await prisma.receivingAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceivingAchievementCreateManyArgs>(args?: SelectSubset<T, ReceivingAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceivingAchievement.
     * @param {ReceivingAchievementDeleteArgs} args - Arguments to delete one ReceivingAchievement.
     * @example
     * // Delete one ReceivingAchievement
     * const ReceivingAchievement = await prisma.receivingAchievement.delete({
     *   where: {
     *     // ... filter to delete one ReceivingAchievement
     *   }
     * })
     * 
     */
    delete<T extends ReceivingAchievementDeleteArgs>(args: SelectSubset<T, ReceivingAchievementDeleteArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceivingAchievement.
     * @param {ReceivingAchievementUpdateArgs} args - Arguments to update one ReceivingAchievement.
     * @example
     * // Update one ReceivingAchievement
     * const receivingAchievement = await prisma.receivingAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceivingAchievementUpdateArgs>(args: SelectSubset<T, ReceivingAchievementUpdateArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceivingAchievements.
     * @param {ReceivingAchievementDeleteManyArgs} args - Arguments to filter ReceivingAchievements to delete.
     * @example
     * // Delete a few ReceivingAchievements
     * const { count } = await prisma.receivingAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceivingAchievementDeleteManyArgs>(args?: SelectSubset<T, ReceivingAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivingAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceivingAchievements
     * const receivingAchievement = await prisma.receivingAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceivingAchievementUpdateManyArgs>(args: SelectSubset<T, ReceivingAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceivingAchievement.
     * @param {ReceivingAchievementUpsertArgs} args - Arguments to update or create a ReceivingAchievement.
     * @example
     * // Update or create a ReceivingAchievement
     * const receivingAchievement = await prisma.receivingAchievement.upsert({
     *   create: {
     *     // ... data to create a ReceivingAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceivingAchievement we want to update
     *   }
     * })
     */
    upsert<T extends ReceivingAchievementUpsertArgs>(args: SelectSubset<T, ReceivingAchievementUpsertArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceivingAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementCountArgs} args - Arguments to filter ReceivingAchievements to count.
     * @example
     * // Count the number of ReceivingAchievements
     * const count = await prisma.receivingAchievement.count({
     *   where: {
     *     // ... the filter for the ReceivingAchievements we want to count
     *   }
     * })
    **/
    count<T extends ReceivingAchievementCountArgs>(
      args?: Subset<T, ReceivingAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceivingAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceivingAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceivingAchievementAggregateArgs>(args: Subset<T, ReceivingAchievementAggregateArgs>): Prisma.PrismaPromise<GetReceivingAchievementAggregateType<T>>

    /**
     * Group by ReceivingAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceivingAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceivingAchievementGroupByArgs['orderBy'] }
        : { orderBy?: ReceivingAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceivingAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceivingAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceivingAchievement model
   */
  readonly fields: ReceivingAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceivingAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceivingAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReceivingAchievementDetail<T extends ReceivingAchievement$ReceivingAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, ReceivingAchievement$ReceivingAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceivingAchievement model
   */
  interface ReceivingAchievementFieldRefs {
    readonly Id: FieldRef<"ReceivingAchievement", 'Int'>
    readonly ReceivedAt: FieldRef<"ReceivingAchievement", 'DateTime'>
    readonly EmployeeId: FieldRef<"ReceivingAchievement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReceivingAchievement findUnique
   */
  export type ReceivingAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievement to fetch.
     */
    where: ReceivingAchievementWhereUniqueInput
  }

  /**
   * ReceivingAchievement findUniqueOrThrow
   */
  export type ReceivingAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievement to fetch.
     */
    where: ReceivingAchievementWhereUniqueInput
  }

  /**
   * ReceivingAchievement findFirst
   */
  export type ReceivingAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievement to fetch.
     */
    where?: ReceivingAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievements to fetch.
     */
    orderBy?: ReceivingAchievementOrderByWithRelationInput | ReceivingAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingAchievements.
     */
    cursor?: ReceivingAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingAchievements.
     */
    distinct?: ReceivingAchievementScalarFieldEnum | ReceivingAchievementScalarFieldEnum[]
  }

  /**
   * ReceivingAchievement findFirstOrThrow
   */
  export type ReceivingAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievement to fetch.
     */
    where?: ReceivingAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievements to fetch.
     */
    orderBy?: ReceivingAchievementOrderByWithRelationInput | ReceivingAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingAchievements.
     */
    cursor?: ReceivingAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingAchievements.
     */
    distinct?: ReceivingAchievementScalarFieldEnum | ReceivingAchievementScalarFieldEnum[]
  }

  /**
   * ReceivingAchievement findMany
   */
  export type ReceivingAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievements to fetch.
     */
    where?: ReceivingAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievements to fetch.
     */
    orderBy?: ReceivingAchievementOrderByWithRelationInput | ReceivingAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceivingAchievements.
     */
    cursor?: ReceivingAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievements.
     */
    skip?: number
    distinct?: ReceivingAchievementScalarFieldEnum | ReceivingAchievementScalarFieldEnum[]
  }

  /**
   * ReceivingAchievement create
   */
  export type ReceivingAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceivingAchievement.
     */
    data: XOR<ReceivingAchievementCreateInput, ReceivingAchievementUncheckedCreateInput>
  }

  /**
   * ReceivingAchievement createMany
   */
  export type ReceivingAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceivingAchievements.
     */
    data: ReceivingAchievementCreateManyInput | ReceivingAchievementCreateManyInput[]
  }

  /**
   * ReceivingAchievement update
   */
  export type ReceivingAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceivingAchievement.
     */
    data: XOR<ReceivingAchievementUpdateInput, ReceivingAchievementUncheckedUpdateInput>
    /**
     * Choose, which ReceivingAchievement to update.
     */
    where: ReceivingAchievementWhereUniqueInput
  }

  /**
   * ReceivingAchievement updateMany
   */
  export type ReceivingAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceivingAchievements.
     */
    data: XOR<ReceivingAchievementUpdateManyMutationInput, ReceivingAchievementUncheckedUpdateManyInput>
    /**
     * Filter which ReceivingAchievements to update
     */
    where?: ReceivingAchievementWhereInput
    /**
     * Limit how many ReceivingAchievements to update.
     */
    limit?: number
  }

  /**
   * ReceivingAchievement upsert
   */
  export type ReceivingAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceivingAchievement to update in case it exists.
     */
    where: ReceivingAchievementWhereUniqueInput
    /**
     * In case the ReceivingAchievement found by the `where` argument doesn't exist, create a new ReceivingAchievement with this data.
     */
    create: XOR<ReceivingAchievementCreateInput, ReceivingAchievementUncheckedCreateInput>
    /**
     * In case the ReceivingAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceivingAchievementUpdateInput, ReceivingAchievementUncheckedUpdateInput>
  }

  /**
   * ReceivingAchievement delete
   */
  export type ReceivingAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
    /**
     * Filter which ReceivingAchievement to delete.
     */
    where: ReceivingAchievementWhereUniqueInput
  }

  /**
   * ReceivingAchievement deleteMany
   */
  export type ReceivingAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingAchievements to delete
     */
    where?: ReceivingAchievementWhereInput
    /**
     * Limit how many ReceivingAchievements to delete.
     */
    limit?: number
  }

  /**
   * ReceivingAchievement.ReceivingAchievementDetail
   */
  export type ReceivingAchievement$ReceivingAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    where?: ReceivingAchievementDetailWhereInput
    orderBy?: ReceivingAchievementDetailOrderByWithRelationInput | ReceivingAchievementDetailOrderByWithRelationInput[]
    cursor?: ReceivingAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceivingAchievementDetailScalarFieldEnum | ReceivingAchievementDetailScalarFieldEnum[]
  }

  /**
   * ReceivingAchievement without action
   */
  export type ReceivingAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievement
     */
    select?: ReceivingAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievement
     */
    omit?: ReceivingAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementInclude<ExtArgs> | null
  }


  /**
   * Model ReceivingAchievementDetail
   */

  export type AggregateReceivingAchievementDetail = {
    _count: ReceivingAchievementDetailCountAggregateOutputType | null
    _avg: ReceivingAchievementDetailAvgAggregateOutputType | null
    _sum: ReceivingAchievementDetailSumAggregateOutputType | null
    _min: ReceivingAchievementDetailMinAggregateOutputType | null
    _max: ReceivingAchievementDetailMaxAggregateOutputType | null
  }

  export type ReceivingAchievementDetailAvgAggregateOutputType = {
    Id: number | null
    ReceivingAchievementId: number | null
    ProductStockId: number | null
  }

  export type ReceivingAchievementDetailSumAggregateOutputType = {
    Id: number | null
    ReceivingAchievementId: number | null
    ProductStockId: number | null
  }

  export type ReceivingAchievementDetailMinAggregateOutputType = {
    Id: number | null
    ReceivingAchievementId: number | null
    ProductStockId: number | null
  }

  export type ReceivingAchievementDetailMaxAggregateOutputType = {
    Id: number | null
    ReceivingAchievementId: number | null
    ProductStockId: number | null
  }

  export type ReceivingAchievementDetailCountAggregateOutputType = {
    Id: number
    ReceivingAchievementId: number
    ProductStockId: number
    _all: number
  }


  export type ReceivingAchievementDetailAvgAggregateInputType = {
    Id?: true
    ReceivingAchievementId?: true
    ProductStockId?: true
  }

  export type ReceivingAchievementDetailSumAggregateInputType = {
    Id?: true
    ReceivingAchievementId?: true
    ProductStockId?: true
  }

  export type ReceivingAchievementDetailMinAggregateInputType = {
    Id?: true
    ReceivingAchievementId?: true
    ProductStockId?: true
  }

  export type ReceivingAchievementDetailMaxAggregateInputType = {
    Id?: true
    ReceivingAchievementId?: true
    ProductStockId?: true
  }

  export type ReceivingAchievementDetailCountAggregateInputType = {
    Id?: true
    ReceivingAchievementId?: true
    ProductStockId?: true
    _all?: true
  }

  export type ReceivingAchievementDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingAchievementDetail to aggregate.
     */
    where?: ReceivingAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievementDetails to fetch.
     */
    orderBy?: ReceivingAchievementDetailOrderByWithRelationInput | ReceivingAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceivingAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceivingAchievementDetails
    **/
    _count?: true | ReceivingAchievementDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceivingAchievementDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceivingAchievementDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceivingAchievementDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceivingAchievementDetailMaxAggregateInputType
  }

  export type GetReceivingAchievementDetailAggregateType<T extends ReceivingAchievementDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateReceivingAchievementDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceivingAchievementDetail[P]>
      : GetScalarType<T[P], AggregateReceivingAchievementDetail[P]>
  }




  export type ReceivingAchievementDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivingAchievementDetailWhereInput
    orderBy?: ReceivingAchievementDetailOrderByWithAggregationInput | ReceivingAchievementDetailOrderByWithAggregationInput[]
    by: ReceivingAchievementDetailScalarFieldEnum[] | ReceivingAchievementDetailScalarFieldEnum
    having?: ReceivingAchievementDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceivingAchievementDetailCountAggregateInputType | true
    _avg?: ReceivingAchievementDetailAvgAggregateInputType
    _sum?: ReceivingAchievementDetailSumAggregateInputType
    _min?: ReceivingAchievementDetailMinAggregateInputType
    _max?: ReceivingAchievementDetailMaxAggregateInputType
  }

  export type ReceivingAchievementDetailGroupByOutputType = {
    Id: number
    ReceivingAchievementId: number
    ProductStockId: number
    _count: ReceivingAchievementDetailCountAggregateOutputType | null
    _avg: ReceivingAchievementDetailAvgAggregateOutputType | null
    _sum: ReceivingAchievementDetailSumAggregateOutputType | null
    _min: ReceivingAchievementDetailMinAggregateOutputType | null
    _max: ReceivingAchievementDetailMaxAggregateOutputType | null
  }

  type GetReceivingAchievementDetailGroupByPayload<T extends ReceivingAchievementDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceivingAchievementDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceivingAchievementDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceivingAchievementDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ReceivingAchievementDetailGroupByOutputType[P]>
        }
      >
    >


  export type ReceivingAchievementDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ReceivingAchievementId?: boolean
    ProductStockId?: boolean
    ProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    ReceivingAchievement?: boolean | ReceivingAchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivingAchievementDetail"]>



  export type ReceivingAchievementDetailSelectScalar = {
    Id?: boolean
    ReceivingAchievementId?: boolean
    ProductStockId?: boolean
  }

  export type ReceivingAchievementDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ReceivingAchievementId" | "ProductStockId", ExtArgs["result"]["receivingAchievementDetail"]>
  export type ReceivingAchievementDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    ReceivingAchievement?: boolean | ReceivingAchievementDefaultArgs<ExtArgs>
  }

  export type $ReceivingAchievementDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceivingAchievementDetail"
    objects: {
      ProductStock: Prisma.$ProductStockPayload<ExtArgs>
      ReceivingAchievement: Prisma.$ReceivingAchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ReceivingAchievementId: number
      ProductStockId: number
    }, ExtArgs["result"]["receivingAchievementDetail"]>
    composites: {}
  }

  type ReceivingAchievementDetailGetPayload<S extends boolean | null | undefined | ReceivingAchievementDetailDefaultArgs> = $Result.GetResult<Prisma.$ReceivingAchievementDetailPayload, S>

  type ReceivingAchievementDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceivingAchievementDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceivingAchievementDetailCountAggregateInputType | true
    }

  export interface ReceivingAchievementDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceivingAchievementDetail'], meta: { name: 'ReceivingAchievementDetail' } }
    /**
     * Find zero or one ReceivingAchievementDetail that matches the filter.
     * @param {ReceivingAchievementDetailFindUniqueArgs} args - Arguments to find a ReceivingAchievementDetail
     * @example
     * // Get one ReceivingAchievementDetail
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceivingAchievementDetailFindUniqueArgs>(args: SelectSubset<T, ReceivingAchievementDetailFindUniqueArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceivingAchievementDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceivingAchievementDetailFindUniqueOrThrowArgs} args - Arguments to find a ReceivingAchievementDetail
     * @example
     * // Get one ReceivingAchievementDetail
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceivingAchievementDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceivingAchievementDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingAchievementDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailFindFirstArgs} args - Arguments to find a ReceivingAchievementDetail
     * @example
     * // Get one ReceivingAchievementDetail
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceivingAchievementDetailFindFirstArgs>(args?: SelectSubset<T, ReceivingAchievementDetailFindFirstArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceivingAchievementDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailFindFirstOrThrowArgs} args - Arguments to find a ReceivingAchievementDetail
     * @example
     * // Get one ReceivingAchievementDetail
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceivingAchievementDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceivingAchievementDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceivingAchievementDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceivingAchievementDetails
     * const receivingAchievementDetails = await prisma.receivingAchievementDetail.findMany()
     * 
     * // Get first 10 ReceivingAchievementDetails
     * const receivingAchievementDetails = await prisma.receivingAchievementDetail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const receivingAchievementDetailWithIdOnly = await prisma.receivingAchievementDetail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ReceivingAchievementDetailFindManyArgs>(args?: SelectSubset<T, ReceivingAchievementDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceivingAchievementDetail.
     * @param {ReceivingAchievementDetailCreateArgs} args - Arguments to create a ReceivingAchievementDetail.
     * @example
     * // Create one ReceivingAchievementDetail
     * const ReceivingAchievementDetail = await prisma.receivingAchievementDetail.create({
     *   data: {
     *     // ... data to create a ReceivingAchievementDetail
     *   }
     * })
     * 
     */
    create<T extends ReceivingAchievementDetailCreateArgs>(args: SelectSubset<T, ReceivingAchievementDetailCreateArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceivingAchievementDetails.
     * @param {ReceivingAchievementDetailCreateManyArgs} args - Arguments to create many ReceivingAchievementDetails.
     * @example
     * // Create many ReceivingAchievementDetails
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceivingAchievementDetailCreateManyArgs>(args?: SelectSubset<T, ReceivingAchievementDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReceivingAchievementDetail.
     * @param {ReceivingAchievementDetailDeleteArgs} args - Arguments to delete one ReceivingAchievementDetail.
     * @example
     * // Delete one ReceivingAchievementDetail
     * const ReceivingAchievementDetail = await prisma.receivingAchievementDetail.delete({
     *   where: {
     *     // ... filter to delete one ReceivingAchievementDetail
     *   }
     * })
     * 
     */
    delete<T extends ReceivingAchievementDetailDeleteArgs>(args: SelectSubset<T, ReceivingAchievementDetailDeleteArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceivingAchievementDetail.
     * @param {ReceivingAchievementDetailUpdateArgs} args - Arguments to update one ReceivingAchievementDetail.
     * @example
     * // Update one ReceivingAchievementDetail
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceivingAchievementDetailUpdateArgs>(args: SelectSubset<T, ReceivingAchievementDetailUpdateArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceivingAchievementDetails.
     * @param {ReceivingAchievementDetailDeleteManyArgs} args - Arguments to filter ReceivingAchievementDetails to delete.
     * @example
     * // Delete a few ReceivingAchievementDetails
     * const { count } = await prisma.receivingAchievementDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceivingAchievementDetailDeleteManyArgs>(args?: SelectSubset<T, ReceivingAchievementDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceivingAchievementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceivingAchievementDetails
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceivingAchievementDetailUpdateManyArgs>(args: SelectSubset<T, ReceivingAchievementDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceivingAchievementDetail.
     * @param {ReceivingAchievementDetailUpsertArgs} args - Arguments to update or create a ReceivingAchievementDetail.
     * @example
     * // Update or create a ReceivingAchievementDetail
     * const receivingAchievementDetail = await prisma.receivingAchievementDetail.upsert({
     *   create: {
     *     // ... data to create a ReceivingAchievementDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceivingAchievementDetail we want to update
     *   }
     * })
     */
    upsert<T extends ReceivingAchievementDetailUpsertArgs>(args: SelectSubset<T, ReceivingAchievementDetailUpsertArgs<ExtArgs>>): Prisma__ReceivingAchievementDetailClient<$Result.GetResult<Prisma.$ReceivingAchievementDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceivingAchievementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailCountArgs} args - Arguments to filter ReceivingAchievementDetails to count.
     * @example
     * // Count the number of ReceivingAchievementDetails
     * const count = await prisma.receivingAchievementDetail.count({
     *   where: {
     *     // ... the filter for the ReceivingAchievementDetails we want to count
     *   }
     * })
    **/
    count<T extends ReceivingAchievementDetailCountArgs>(
      args?: Subset<T, ReceivingAchievementDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceivingAchievementDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceivingAchievementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceivingAchievementDetailAggregateArgs>(args: Subset<T, ReceivingAchievementDetailAggregateArgs>): Prisma.PrismaPromise<GetReceivingAchievementDetailAggregateType<T>>

    /**
     * Group by ReceivingAchievementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivingAchievementDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceivingAchievementDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceivingAchievementDetailGroupByArgs['orderBy'] }
        : { orderBy?: ReceivingAchievementDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceivingAchievementDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceivingAchievementDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceivingAchievementDetail model
   */
  readonly fields: ReceivingAchievementDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceivingAchievementDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceivingAchievementDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductStock<T extends ProductStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductStockDefaultArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReceivingAchievement<T extends ReceivingAchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceivingAchievementDefaultArgs<ExtArgs>>): Prisma__ReceivingAchievementClient<$Result.GetResult<Prisma.$ReceivingAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceivingAchievementDetail model
   */
  interface ReceivingAchievementDetailFieldRefs {
    readonly Id: FieldRef<"ReceivingAchievementDetail", 'Int'>
    readonly ReceivingAchievementId: FieldRef<"ReceivingAchievementDetail", 'Int'>
    readonly ProductStockId: FieldRef<"ReceivingAchievementDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReceivingAchievementDetail findUnique
   */
  export type ReceivingAchievementDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievementDetail to fetch.
     */
    where: ReceivingAchievementDetailWhereUniqueInput
  }

  /**
   * ReceivingAchievementDetail findUniqueOrThrow
   */
  export type ReceivingAchievementDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievementDetail to fetch.
     */
    where: ReceivingAchievementDetailWhereUniqueInput
  }

  /**
   * ReceivingAchievementDetail findFirst
   */
  export type ReceivingAchievementDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievementDetail to fetch.
     */
    where?: ReceivingAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievementDetails to fetch.
     */
    orderBy?: ReceivingAchievementDetailOrderByWithRelationInput | ReceivingAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingAchievementDetails.
     */
    cursor?: ReceivingAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingAchievementDetails.
     */
    distinct?: ReceivingAchievementDetailScalarFieldEnum | ReceivingAchievementDetailScalarFieldEnum[]
  }

  /**
   * ReceivingAchievementDetail findFirstOrThrow
   */
  export type ReceivingAchievementDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievementDetail to fetch.
     */
    where?: ReceivingAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievementDetails to fetch.
     */
    orderBy?: ReceivingAchievementDetailOrderByWithRelationInput | ReceivingAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceivingAchievementDetails.
     */
    cursor?: ReceivingAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceivingAchievementDetails.
     */
    distinct?: ReceivingAchievementDetailScalarFieldEnum | ReceivingAchievementDetailScalarFieldEnum[]
  }

  /**
   * ReceivingAchievementDetail findMany
   */
  export type ReceivingAchievementDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ReceivingAchievementDetails to fetch.
     */
    where?: ReceivingAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceivingAchievementDetails to fetch.
     */
    orderBy?: ReceivingAchievementDetailOrderByWithRelationInput | ReceivingAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceivingAchievementDetails.
     */
    cursor?: ReceivingAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceivingAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceivingAchievementDetails.
     */
    skip?: number
    distinct?: ReceivingAchievementDetailScalarFieldEnum | ReceivingAchievementDetailScalarFieldEnum[]
  }

  /**
   * ReceivingAchievementDetail create
   */
  export type ReceivingAchievementDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceivingAchievementDetail.
     */
    data: XOR<ReceivingAchievementDetailCreateInput, ReceivingAchievementDetailUncheckedCreateInput>
  }

  /**
   * ReceivingAchievementDetail createMany
   */
  export type ReceivingAchievementDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceivingAchievementDetails.
     */
    data: ReceivingAchievementDetailCreateManyInput | ReceivingAchievementDetailCreateManyInput[]
  }

  /**
   * ReceivingAchievementDetail update
   */
  export type ReceivingAchievementDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceivingAchievementDetail.
     */
    data: XOR<ReceivingAchievementDetailUpdateInput, ReceivingAchievementDetailUncheckedUpdateInput>
    /**
     * Choose, which ReceivingAchievementDetail to update.
     */
    where: ReceivingAchievementDetailWhereUniqueInput
  }

  /**
   * ReceivingAchievementDetail updateMany
   */
  export type ReceivingAchievementDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceivingAchievementDetails.
     */
    data: XOR<ReceivingAchievementDetailUpdateManyMutationInput, ReceivingAchievementDetailUncheckedUpdateManyInput>
    /**
     * Filter which ReceivingAchievementDetails to update
     */
    where?: ReceivingAchievementDetailWhereInput
    /**
     * Limit how many ReceivingAchievementDetails to update.
     */
    limit?: number
  }

  /**
   * ReceivingAchievementDetail upsert
   */
  export type ReceivingAchievementDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceivingAchievementDetail to update in case it exists.
     */
    where: ReceivingAchievementDetailWhereUniqueInput
    /**
     * In case the ReceivingAchievementDetail found by the `where` argument doesn't exist, create a new ReceivingAchievementDetail with this data.
     */
    create: XOR<ReceivingAchievementDetailCreateInput, ReceivingAchievementDetailUncheckedCreateInput>
    /**
     * In case the ReceivingAchievementDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceivingAchievementDetailUpdateInput, ReceivingAchievementDetailUncheckedUpdateInput>
  }

  /**
   * ReceivingAchievementDetail delete
   */
  export type ReceivingAchievementDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter which ReceivingAchievementDetail to delete.
     */
    where: ReceivingAchievementDetailWhereUniqueInput
  }

  /**
   * ReceivingAchievementDetail deleteMany
   */
  export type ReceivingAchievementDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceivingAchievementDetails to delete
     */
    where?: ReceivingAchievementDetailWhereInput
    /**
     * Limit how many ReceivingAchievementDetails to delete.
     */
    limit?: number
  }

  /**
   * ReceivingAchievementDetail without action
   */
  export type ReceivingAchievementDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceivingAchievementDetail
     */
    select?: ReceivingAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceivingAchievementDetail
     */
    omit?: ReceivingAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivingAchievementDetailInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentAchievement
   */

  export type AggregateShipmentAchievement = {
    _count: ShipmentAchievementCountAggregateOutputType | null
    _avg: ShipmentAchievementAvgAggregateOutputType | null
    _sum: ShipmentAchievementSumAggregateOutputType | null
    _min: ShipmentAchievementMinAggregateOutputType | null
    _max: ShipmentAchievementMaxAggregateOutputType | null
  }

  export type ShipmentAchievementAvgAggregateOutputType = {
    Id: number | null
    EmployeeId: number | null
  }

  export type ShipmentAchievementSumAggregateOutputType = {
    Id: number | null
    EmployeeId: number | null
  }

  export type ShipmentAchievementMinAggregateOutputType = {
    Id: number | null
    ShippedAt: Date | null
    EmployeeId: number | null
  }

  export type ShipmentAchievementMaxAggregateOutputType = {
    Id: number | null
    ShippedAt: Date | null
    EmployeeId: number | null
  }

  export type ShipmentAchievementCountAggregateOutputType = {
    Id: number
    ShippedAt: number
    EmployeeId: number
    _all: number
  }


  export type ShipmentAchievementAvgAggregateInputType = {
    Id?: true
    EmployeeId?: true
  }

  export type ShipmentAchievementSumAggregateInputType = {
    Id?: true
    EmployeeId?: true
  }

  export type ShipmentAchievementMinAggregateInputType = {
    Id?: true
    ShippedAt?: true
    EmployeeId?: true
  }

  export type ShipmentAchievementMaxAggregateInputType = {
    Id?: true
    ShippedAt?: true
    EmployeeId?: true
  }

  export type ShipmentAchievementCountAggregateInputType = {
    Id?: true
    ShippedAt?: true
    EmployeeId?: true
    _all?: true
  }

  export type ShipmentAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentAchievement to aggregate.
     */
    where?: ShipmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievements to fetch.
     */
    orderBy?: ShipmentAchievementOrderByWithRelationInput | ShipmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentAchievements
    **/
    _count?: true | ShipmentAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentAchievementMaxAggregateInputType
  }

  export type GetShipmentAchievementAggregateType<T extends ShipmentAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentAchievement[P]>
      : GetScalarType<T[P], AggregateShipmentAchievement[P]>
  }




  export type ShipmentAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentAchievementWhereInput
    orderBy?: ShipmentAchievementOrderByWithAggregationInput | ShipmentAchievementOrderByWithAggregationInput[]
    by: ShipmentAchievementScalarFieldEnum[] | ShipmentAchievementScalarFieldEnum
    having?: ShipmentAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentAchievementCountAggregateInputType | true
    _avg?: ShipmentAchievementAvgAggregateInputType
    _sum?: ShipmentAchievementSumAggregateInputType
    _min?: ShipmentAchievementMinAggregateInputType
    _max?: ShipmentAchievementMaxAggregateInputType
  }

  export type ShipmentAchievementGroupByOutputType = {
    Id: number
    ShippedAt: Date
    EmployeeId: number
    _count: ShipmentAchievementCountAggregateOutputType | null
    _avg: ShipmentAchievementAvgAggregateOutputType | null
    _sum: ShipmentAchievementSumAggregateOutputType | null
    _min: ShipmentAchievementMinAggregateOutputType | null
    _max: ShipmentAchievementMaxAggregateOutputType | null
  }

  type GetShipmentAchievementGroupByPayload<T extends ShipmentAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentAchievementGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ShippedAt?: boolean
    EmployeeId?: boolean
    Employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    ShipmentAchievementDetail?: boolean | ShipmentAchievement$ShipmentAchievementDetailArgs<ExtArgs>
    _count?: boolean | ShipmentAchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentAchievement"]>



  export type ShipmentAchievementSelectScalar = {
    Id?: boolean
    ShippedAt?: boolean
    EmployeeId?: boolean
  }

  export type ShipmentAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ShippedAt" | "EmployeeId", ExtArgs["result"]["shipmentAchievement"]>
  export type ShipmentAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    ShipmentAchievementDetail?: boolean | ShipmentAchievement$ShipmentAchievementDetailArgs<ExtArgs>
    _count?: boolean | ShipmentAchievementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShipmentAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentAchievement"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs>
      ShipmentAchievementDetail: Prisma.$ShipmentAchievementDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ShippedAt: Date
      EmployeeId: number
    }, ExtArgs["result"]["shipmentAchievement"]>
    composites: {}
  }

  type ShipmentAchievementGetPayload<S extends boolean | null | undefined | ShipmentAchievementDefaultArgs> = $Result.GetResult<Prisma.$ShipmentAchievementPayload, S>

  type ShipmentAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentAchievementCountAggregateInputType | true
    }

  export interface ShipmentAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentAchievement'], meta: { name: 'ShipmentAchievement' } }
    /**
     * Find zero or one ShipmentAchievement that matches the filter.
     * @param {ShipmentAchievementFindUniqueArgs} args - Arguments to find a ShipmentAchievement
     * @example
     * // Get one ShipmentAchievement
     * const shipmentAchievement = await prisma.shipmentAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentAchievementFindUniqueArgs>(args: SelectSubset<T, ShipmentAchievementFindUniqueArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentAchievementFindUniqueOrThrowArgs} args - Arguments to find a ShipmentAchievement
     * @example
     * // Get one ShipmentAchievement
     * const shipmentAchievement = await prisma.shipmentAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementFindFirstArgs} args - Arguments to find a ShipmentAchievement
     * @example
     * // Get one ShipmentAchievement
     * const shipmentAchievement = await prisma.shipmentAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentAchievementFindFirstArgs>(args?: SelectSubset<T, ShipmentAchievementFindFirstArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementFindFirstOrThrowArgs} args - Arguments to find a ShipmentAchievement
     * @example
     * // Get one ShipmentAchievement
     * const shipmentAchievement = await prisma.shipmentAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentAchievements
     * const shipmentAchievements = await prisma.shipmentAchievement.findMany()
     * 
     * // Get first 10 ShipmentAchievements
     * const shipmentAchievements = await prisma.shipmentAchievement.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const shipmentAchievementWithIdOnly = await prisma.shipmentAchievement.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ShipmentAchievementFindManyArgs>(args?: SelectSubset<T, ShipmentAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentAchievement.
     * @param {ShipmentAchievementCreateArgs} args - Arguments to create a ShipmentAchievement.
     * @example
     * // Create one ShipmentAchievement
     * const ShipmentAchievement = await prisma.shipmentAchievement.create({
     *   data: {
     *     // ... data to create a ShipmentAchievement
     *   }
     * })
     * 
     */
    create<T extends ShipmentAchievementCreateArgs>(args: SelectSubset<T, ShipmentAchievementCreateArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentAchievements.
     * @param {ShipmentAchievementCreateManyArgs} args - Arguments to create many ShipmentAchievements.
     * @example
     * // Create many ShipmentAchievements
     * const shipmentAchievement = await prisma.shipmentAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentAchievementCreateManyArgs>(args?: SelectSubset<T, ShipmentAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShipmentAchievement.
     * @param {ShipmentAchievementDeleteArgs} args - Arguments to delete one ShipmentAchievement.
     * @example
     * // Delete one ShipmentAchievement
     * const ShipmentAchievement = await prisma.shipmentAchievement.delete({
     *   where: {
     *     // ... filter to delete one ShipmentAchievement
     *   }
     * })
     * 
     */
    delete<T extends ShipmentAchievementDeleteArgs>(args: SelectSubset<T, ShipmentAchievementDeleteArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentAchievement.
     * @param {ShipmentAchievementUpdateArgs} args - Arguments to update one ShipmentAchievement.
     * @example
     * // Update one ShipmentAchievement
     * const shipmentAchievement = await prisma.shipmentAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentAchievementUpdateArgs>(args: SelectSubset<T, ShipmentAchievementUpdateArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentAchievements.
     * @param {ShipmentAchievementDeleteManyArgs} args - Arguments to filter ShipmentAchievements to delete.
     * @example
     * // Delete a few ShipmentAchievements
     * const { count } = await prisma.shipmentAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentAchievementDeleteManyArgs>(args?: SelectSubset<T, ShipmentAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentAchievements
     * const shipmentAchievement = await prisma.shipmentAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentAchievementUpdateManyArgs>(args: SelectSubset<T, ShipmentAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShipmentAchievement.
     * @param {ShipmentAchievementUpsertArgs} args - Arguments to update or create a ShipmentAchievement.
     * @example
     * // Update or create a ShipmentAchievement
     * const shipmentAchievement = await prisma.shipmentAchievement.upsert({
     *   create: {
     *     // ... data to create a ShipmentAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentAchievement we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentAchievementUpsertArgs>(args: SelectSubset<T, ShipmentAchievementUpsertArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementCountArgs} args - Arguments to filter ShipmentAchievements to count.
     * @example
     * // Count the number of ShipmentAchievements
     * const count = await prisma.shipmentAchievement.count({
     *   where: {
     *     // ... the filter for the ShipmentAchievements we want to count
     *   }
     * })
    **/
    count<T extends ShipmentAchievementCountArgs>(
      args?: Subset<T, ShipmentAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAchievementAggregateArgs>(args: Subset<T, ShipmentAchievementAggregateArgs>): Prisma.PrismaPromise<GetShipmentAchievementAggregateType<T>>

    /**
     * Group by ShipmentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentAchievementGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentAchievement model
   */
  readonly fields: ShipmentAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ShipmentAchievementDetail<T extends ShipmentAchievement$ShipmentAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentAchievement$ShipmentAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentAchievement model
   */
  interface ShipmentAchievementFieldRefs {
    readonly Id: FieldRef<"ShipmentAchievement", 'Int'>
    readonly ShippedAt: FieldRef<"ShipmentAchievement", 'DateTime'>
    readonly EmployeeId: FieldRef<"ShipmentAchievement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentAchievement findUnique
   */
  export type ShipmentAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievement to fetch.
     */
    where: ShipmentAchievementWhereUniqueInput
  }

  /**
   * ShipmentAchievement findUniqueOrThrow
   */
  export type ShipmentAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievement to fetch.
     */
    where: ShipmentAchievementWhereUniqueInput
  }

  /**
   * ShipmentAchievement findFirst
   */
  export type ShipmentAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievement to fetch.
     */
    where?: ShipmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievements to fetch.
     */
    orderBy?: ShipmentAchievementOrderByWithRelationInput | ShipmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentAchievements.
     */
    cursor?: ShipmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentAchievements.
     */
    distinct?: ShipmentAchievementScalarFieldEnum | ShipmentAchievementScalarFieldEnum[]
  }

  /**
   * ShipmentAchievement findFirstOrThrow
   */
  export type ShipmentAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievement to fetch.
     */
    where?: ShipmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievements to fetch.
     */
    orderBy?: ShipmentAchievementOrderByWithRelationInput | ShipmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentAchievements.
     */
    cursor?: ShipmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentAchievements.
     */
    distinct?: ShipmentAchievementScalarFieldEnum | ShipmentAchievementScalarFieldEnum[]
  }

  /**
   * ShipmentAchievement findMany
   */
  export type ShipmentAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievements to fetch.
     */
    where?: ShipmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievements to fetch.
     */
    orderBy?: ShipmentAchievementOrderByWithRelationInput | ShipmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentAchievements.
     */
    cursor?: ShipmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievements.
     */
    skip?: number
    distinct?: ShipmentAchievementScalarFieldEnum | ShipmentAchievementScalarFieldEnum[]
  }

  /**
   * ShipmentAchievement create
   */
  export type ShipmentAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentAchievement.
     */
    data: XOR<ShipmentAchievementCreateInput, ShipmentAchievementUncheckedCreateInput>
  }

  /**
   * ShipmentAchievement createMany
   */
  export type ShipmentAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentAchievements.
     */
    data: ShipmentAchievementCreateManyInput | ShipmentAchievementCreateManyInput[]
  }

  /**
   * ShipmentAchievement update
   */
  export type ShipmentAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentAchievement.
     */
    data: XOR<ShipmentAchievementUpdateInput, ShipmentAchievementUncheckedUpdateInput>
    /**
     * Choose, which ShipmentAchievement to update.
     */
    where: ShipmentAchievementWhereUniqueInput
  }

  /**
   * ShipmentAchievement updateMany
   */
  export type ShipmentAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentAchievements.
     */
    data: XOR<ShipmentAchievementUpdateManyMutationInput, ShipmentAchievementUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentAchievements to update
     */
    where?: ShipmentAchievementWhereInput
    /**
     * Limit how many ShipmentAchievements to update.
     */
    limit?: number
  }

  /**
   * ShipmentAchievement upsert
   */
  export type ShipmentAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentAchievement to update in case it exists.
     */
    where: ShipmentAchievementWhereUniqueInput
    /**
     * In case the ShipmentAchievement found by the `where` argument doesn't exist, create a new ShipmentAchievement with this data.
     */
    create: XOR<ShipmentAchievementCreateInput, ShipmentAchievementUncheckedCreateInput>
    /**
     * In case the ShipmentAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentAchievementUpdateInput, ShipmentAchievementUncheckedUpdateInput>
  }

  /**
   * ShipmentAchievement delete
   */
  export type ShipmentAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
    /**
     * Filter which ShipmentAchievement to delete.
     */
    where: ShipmentAchievementWhereUniqueInput
  }

  /**
   * ShipmentAchievement deleteMany
   */
  export type ShipmentAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentAchievements to delete
     */
    where?: ShipmentAchievementWhereInput
    /**
     * Limit how many ShipmentAchievements to delete.
     */
    limit?: number
  }

  /**
   * ShipmentAchievement.ShipmentAchievementDetail
   */
  export type ShipmentAchievement$ShipmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    where?: ShipmentAchievementDetailWhereInput
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentAchievementDetailScalarFieldEnum | ShipmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ShipmentAchievement without action
   */
  export type ShipmentAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievement
     */
    select?: ShipmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievement
     */
    omit?: ShipmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentAchievementDetail
   */

  export type AggregateShipmentAchievementDetail = {
    _count: ShipmentAchievementDetailCountAggregateOutputType | null
    _avg: ShipmentAchievementDetailAvgAggregateOutputType | null
    _sum: ShipmentAchievementDetailSumAggregateOutputType | null
    _min: ShipmentAchievementDetailMinAggregateOutputType | null
    _max: ShipmentAchievementDetailMaxAggregateOutputType | null
  }

  export type ShipmentAchievementDetailAvgAggregateOutputType = {
    Id: number | null
    ShipmentAchievementId: number | null
    ProductStockId: number | null
    ShipmentPlanDetailId: number | null
  }

  export type ShipmentAchievementDetailSumAggregateOutputType = {
    Id: number | null
    ShipmentAchievementId: number | null
    ProductStockId: number | null
    ShipmentPlanDetailId: number | null
  }

  export type ShipmentAchievementDetailMinAggregateOutputType = {
    Id: number | null
    ShipmentAchievementId: number | null
    ProductStockId: number | null
    ShipmentPlanDetailId: number | null
  }

  export type ShipmentAchievementDetailMaxAggregateOutputType = {
    Id: number | null
    ShipmentAchievementId: number | null
    ProductStockId: number | null
    ShipmentPlanDetailId: number | null
  }

  export type ShipmentAchievementDetailCountAggregateOutputType = {
    Id: number
    ShipmentAchievementId: number
    ProductStockId: number
    ShipmentPlanDetailId: number
    _all: number
  }


  export type ShipmentAchievementDetailAvgAggregateInputType = {
    Id?: true
    ShipmentAchievementId?: true
    ProductStockId?: true
    ShipmentPlanDetailId?: true
  }

  export type ShipmentAchievementDetailSumAggregateInputType = {
    Id?: true
    ShipmentAchievementId?: true
    ProductStockId?: true
    ShipmentPlanDetailId?: true
  }

  export type ShipmentAchievementDetailMinAggregateInputType = {
    Id?: true
    ShipmentAchievementId?: true
    ProductStockId?: true
    ShipmentPlanDetailId?: true
  }

  export type ShipmentAchievementDetailMaxAggregateInputType = {
    Id?: true
    ShipmentAchievementId?: true
    ProductStockId?: true
    ShipmentPlanDetailId?: true
  }

  export type ShipmentAchievementDetailCountAggregateInputType = {
    Id?: true
    ShipmentAchievementId?: true
    ProductStockId?: true
    ShipmentPlanDetailId?: true
    _all?: true
  }

  export type ShipmentAchievementDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentAchievementDetail to aggregate.
     */
    where?: ShipmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievementDetails to fetch.
     */
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentAchievementDetails
    **/
    _count?: true | ShipmentAchievementDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAchievementDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentAchievementDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentAchievementDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentAchievementDetailMaxAggregateInputType
  }

  export type GetShipmentAchievementDetailAggregateType<T extends ShipmentAchievementDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentAchievementDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentAchievementDetail[P]>
      : GetScalarType<T[P], AggregateShipmentAchievementDetail[P]>
  }




  export type ShipmentAchievementDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentAchievementDetailWhereInput
    orderBy?: ShipmentAchievementDetailOrderByWithAggregationInput | ShipmentAchievementDetailOrderByWithAggregationInput[]
    by: ShipmentAchievementDetailScalarFieldEnum[] | ShipmentAchievementDetailScalarFieldEnum
    having?: ShipmentAchievementDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentAchievementDetailCountAggregateInputType | true
    _avg?: ShipmentAchievementDetailAvgAggregateInputType
    _sum?: ShipmentAchievementDetailSumAggregateInputType
    _min?: ShipmentAchievementDetailMinAggregateInputType
    _max?: ShipmentAchievementDetailMaxAggregateInputType
  }

  export type ShipmentAchievementDetailGroupByOutputType = {
    Id: number
    ShipmentAchievementId: number
    ProductStockId: number
    ShipmentPlanDetailId: number
    _count: ShipmentAchievementDetailCountAggregateOutputType | null
    _avg: ShipmentAchievementDetailAvgAggregateOutputType | null
    _sum: ShipmentAchievementDetailSumAggregateOutputType | null
    _min: ShipmentAchievementDetailMinAggregateOutputType | null
    _max: ShipmentAchievementDetailMaxAggregateOutputType | null
  }

  type GetShipmentAchievementDetailGroupByPayload<T extends ShipmentAchievementDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentAchievementDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentAchievementDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentAchievementDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentAchievementDetailGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentAchievementDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ShipmentAchievementId?: boolean
    ProductStockId?: boolean
    ShipmentPlanDetailId?: boolean
    ProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    ShipmentAchievement?: boolean | ShipmentAchievementDefaultArgs<ExtArgs>
    ShipmentPlanDetail?: boolean | ShipmentPlanDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentAchievementDetail"]>



  export type ShipmentAchievementDetailSelectScalar = {
    Id?: boolean
    ShipmentAchievementId?: boolean
    ProductStockId?: boolean
    ShipmentPlanDetailId?: boolean
  }

  export type ShipmentAchievementDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ShipmentAchievementId" | "ProductStockId" | "ShipmentPlanDetailId", ExtArgs["result"]["shipmentAchievementDetail"]>
  export type ShipmentAchievementDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    ShipmentAchievement?: boolean | ShipmentAchievementDefaultArgs<ExtArgs>
    ShipmentPlanDetail?: boolean | ShipmentPlanDetailDefaultArgs<ExtArgs>
  }

  export type $ShipmentAchievementDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentAchievementDetail"
    objects: {
      ProductStock: Prisma.$ProductStockPayload<ExtArgs>
      ShipmentAchievement: Prisma.$ShipmentAchievementPayload<ExtArgs>
      ShipmentPlanDetail: Prisma.$ShipmentPlanDetailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ShipmentAchievementId: number
      ProductStockId: number
      ShipmentPlanDetailId: number
    }, ExtArgs["result"]["shipmentAchievementDetail"]>
    composites: {}
  }

  type ShipmentAchievementDetailGetPayload<S extends boolean | null | undefined | ShipmentAchievementDetailDefaultArgs> = $Result.GetResult<Prisma.$ShipmentAchievementDetailPayload, S>

  type ShipmentAchievementDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentAchievementDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentAchievementDetailCountAggregateInputType | true
    }

  export interface ShipmentAchievementDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentAchievementDetail'], meta: { name: 'ShipmentAchievementDetail' } }
    /**
     * Find zero or one ShipmentAchievementDetail that matches the filter.
     * @param {ShipmentAchievementDetailFindUniqueArgs} args - Arguments to find a ShipmentAchievementDetail
     * @example
     * // Get one ShipmentAchievementDetail
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentAchievementDetailFindUniqueArgs>(args: SelectSubset<T, ShipmentAchievementDetailFindUniqueArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentAchievementDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentAchievementDetailFindUniqueOrThrowArgs} args - Arguments to find a ShipmentAchievementDetail
     * @example
     * // Get one ShipmentAchievementDetail
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentAchievementDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentAchievementDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentAchievementDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailFindFirstArgs} args - Arguments to find a ShipmentAchievementDetail
     * @example
     * // Get one ShipmentAchievementDetail
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentAchievementDetailFindFirstArgs>(args?: SelectSubset<T, ShipmentAchievementDetailFindFirstArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentAchievementDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailFindFirstOrThrowArgs} args - Arguments to find a ShipmentAchievementDetail
     * @example
     * // Get one ShipmentAchievementDetail
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentAchievementDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentAchievementDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentAchievementDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentAchievementDetails
     * const shipmentAchievementDetails = await prisma.shipmentAchievementDetail.findMany()
     * 
     * // Get first 10 ShipmentAchievementDetails
     * const shipmentAchievementDetails = await prisma.shipmentAchievementDetail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const shipmentAchievementDetailWithIdOnly = await prisma.shipmentAchievementDetail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ShipmentAchievementDetailFindManyArgs>(args?: SelectSubset<T, ShipmentAchievementDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentAchievementDetail.
     * @param {ShipmentAchievementDetailCreateArgs} args - Arguments to create a ShipmentAchievementDetail.
     * @example
     * // Create one ShipmentAchievementDetail
     * const ShipmentAchievementDetail = await prisma.shipmentAchievementDetail.create({
     *   data: {
     *     // ... data to create a ShipmentAchievementDetail
     *   }
     * })
     * 
     */
    create<T extends ShipmentAchievementDetailCreateArgs>(args: SelectSubset<T, ShipmentAchievementDetailCreateArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentAchievementDetails.
     * @param {ShipmentAchievementDetailCreateManyArgs} args - Arguments to create many ShipmentAchievementDetails.
     * @example
     * // Create many ShipmentAchievementDetails
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentAchievementDetailCreateManyArgs>(args?: SelectSubset<T, ShipmentAchievementDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShipmentAchievementDetail.
     * @param {ShipmentAchievementDetailDeleteArgs} args - Arguments to delete one ShipmentAchievementDetail.
     * @example
     * // Delete one ShipmentAchievementDetail
     * const ShipmentAchievementDetail = await prisma.shipmentAchievementDetail.delete({
     *   where: {
     *     // ... filter to delete one ShipmentAchievementDetail
     *   }
     * })
     * 
     */
    delete<T extends ShipmentAchievementDetailDeleteArgs>(args: SelectSubset<T, ShipmentAchievementDetailDeleteArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentAchievementDetail.
     * @param {ShipmentAchievementDetailUpdateArgs} args - Arguments to update one ShipmentAchievementDetail.
     * @example
     * // Update one ShipmentAchievementDetail
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentAchievementDetailUpdateArgs>(args: SelectSubset<T, ShipmentAchievementDetailUpdateArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentAchievementDetails.
     * @param {ShipmentAchievementDetailDeleteManyArgs} args - Arguments to filter ShipmentAchievementDetails to delete.
     * @example
     * // Delete a few ShipmentAchievementDetails
     * const { count } = await prisma.shipmentAchievementDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentAchievementDetailDeleteManyArgs>(args?: SelectSubset<T, ShipmentAchievementDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentAchievementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentAchievementDetails
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentAchievementDetailUpdateManyArgs>(args: SelectSubset<T, ShipmentAchievementDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShipmentAchievementDetail.
     * @param {ShipmentAchievementDetailUpsertArgs} args - Arguments to update or create a ShipmentAchievementDetail.
     * @example
     * // Update or create a ShipmentAchievementDetail
     * const shipmentAchievementDetail = await prisma.shipmentAchievementDetail.upsert({
     *   create: {
     *     // ... data to create a ShipmentAchievementDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentAchievementDetail we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentAchievementDetailUpsertArgs>(args: SelectSubset<T, ShipmentAchievementDetailUpsertArgs<ExtArgs>>): Prisma__ShipmentAchievementDetailClient<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentAchievementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailCountArgs} args - Arguments to filter ShipmentAchievementDetails to count.
     * @example
     * // Count the number of ShipmentAchievementDetails
     * const count = await prisma.shipmentAchievementDetail.count({
     *   where: {
     *     // ... the filter for the ShipmentAchievementDetails we want to count
     *   }
     * })
    **/
    count<T extends ShipmentAchievementDetailCountArgs>(
      args?: Subset<T, ShipmentAchievementDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentAchievementDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentAchievementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAchievementDetailAggregateArgs>(args: Subset<T, ShipmentAchievementDetailAggregateArgs>): Prisma.PrismaPromise<GetShipmentAchievementDetailAggregateType<T>>

    /**
     * Group by ShipmentAchievementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAchievementDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentAchievementDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentAchievementDetailGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentAchievementDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentAchievementDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentAchievementDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentAchievementDetail model
   */
  readonly fields: ShipmentAchievementDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentAchievementDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentAchievementDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductStock<T extends ProductStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductStockDefaultArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ShipmentAchievement<T extends ShipmentAchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentAchievementDefaultArgs<ExtArgs>>): Prisma__ShipmentAchievementClient<$Result.GetResult<Prisma.$ShipmentAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ShipmentPlanDetail<T extends ShipmentPlanDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentPlanDetailDefaultArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentAchievementDetail model
   */
  interface ShipmentAchievementDetailFieldRefs {
    readonly Id: FieldRef<"ShipmentAchievementDetail", 'Int'>
    readonly ShipmentAchievementId: FieldRef<"ShipmentAchievementDetail", 'Int'>
    readonly ProductStockId: FieldRef<"ShipmentAchievementDetail", 'Int'>
    readonly ShipmentPlanDetailId: FieldRef<"ShipmentAchievementDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentAchievementDetail findUnique
   */
  export type ShipmentAchievementDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievementDetail to fetch.
     */
    where: ShipmentAchievementDetailWhereUniqueInput
  }

  /**
   * ShipmentAchievementDetail findUniqueOrThrow
   */
  export type ShipmentAchievementDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievementDetail to fetch.
     */
    where: ShipmentAchievementDetailWhereUniqueInput
  }

  /**
   * ShipmentAchievementDetail findFirst
   */
  export type ShipmentAchievementDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievementDetail to fetch.
     */
    where?: ShipmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievementDetails to fetch.
     */
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentAchievementDetails.
     */
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentAchievementDetails.
     */
    distinct?: ShipmentAchievementDetailScalarFieldEnum | ShipmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ShipmentAchievementDetail findFirstOrThrow
   */
  export type ShipmentAchievementDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievementDetail to fetch.
     */
    where?: ShipmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievementDetails to fetch.
     */
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentAchievementDetails.
     */
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentAchievementDetails.
     */
    distinct?: ShipmentAchievementDetailScalarFieldEnum | ShipmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ShipmentAchievementDetail findMany
   */
  export type ShipmentAchievementDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentAchievementDetails to fetch.
     */
    where?: ShipmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentAchievementDetails to fetch.
     */
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentAchievementDetails.
     */
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentAchievementDetails.
     */
    skip?: number
    distinct?: ShipmentAchievementDetailScalarFieldEnum | ShipmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ShipmentAchievementDetail create
   */
  export type ShipmentAchievementDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentAchievementDetail.
     */
    data: XOR<ShipmentAchievementDetailCreateInput, ShipmentAchievementDetailUncheckedCreateInput>
  }

  /**
   * ShipmentAchievementDetail createMany
   */
  export type ShipmentAchievementDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentAchievementDetails.
     */
    data: ShipmentAchievementDetailCreateManyInput | ShipmentAchievementDetailCreateManyInput[]
  }

  /**
   * ShipmentAchievementDetail update
   */
  export type ShipmentAchievementDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentAchievementDetail.
     */
    data: XOR<ShipmentAchievementDetailUpdateInput, ShipmentAchievementDetailUncheckedUpdateInput>
    /**
     * Choose, which ShipmentAchievementDetail to update.
     */
    where: ShipmentAchievementDetailWhereUniqueInput
  }

  /**
   * ShipmentAchievementDetail updateMany
   */
  export type ShipmentAchievementDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentAchievementDetails.
     */
    data: XOR<ShipmentAchievementDetailUpdateManyMutationInput, ShipmentAchievementDetailUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentAchievementDetails to update
     */
    where?: ShipmentAchievementDetailWhereInput
    /**
     * Limit how many ShipmentAchievementDetails to update.
     */
    limit?: number
  }

  /**
   * ShipmentAchievementDetail upsert
   */
  export type ShipmentAchievementDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentAchievementDetail to update in case it exists.
     */
    where: ShipmentAchievementDetailWhereUniqueInput
    /**
     * In case the ShipmentAchievementDetail found by the `where` argument doesn't exist, create a new ShipmentAchievementDetail with this data.
     */
    create: XOR<ShipmentAchievementDetailCreateInput, ShipmentAchievementDetailUncheckedCreateInput>
    /**
     * In case the ShipmentAchievementDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentAchievementDetailUpdateInput, ShipmentAchievementDetailUncheckedUpdateInput>
  }

  /**
   * ShipmentAchievementDetail delete
   */
  export type ShipmentAchievementDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter which ShipmentAchievementDetail to delete.
     */
    where: ShipmentAchievementDetailWhereUniqueInput
  }

  /**
   * ShipmentAchievementDetail deleteMany
   */
  export type ShipmentAchievementDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentAchievementDetails to delete
     */
    where?: ShipmentAchievementDetailWhereInput
    /**
     * Limit how many ShipmentAchievementDetails to delete.
     */
    limit?: number
  }

  /**
   * ShipmentAchievementDetail without action
   */
  export type ShipmentAchievementDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentPlan
   */

  export type AggregateShipmentPlan = {
    _count: ShipmentPlanCountAggregateOutputType | null
    _avg: ShipmentPlanAvgAggregateOutputType | null
    _sum: ShipmentPlanSumAggregateOutputType | null
    _min: ShipmentPlanMinAggregateOutputType | null
    _max: ShipmentPlanMaxAggregateOutputType | null
  }

  export type ShipmentPlanAvgAggregateOutputType = {
    Id: number | null
    CustomerId: number | null
  }

  export type ShipmentPlanSumAggregateOutputType = {
    Id: number | null
    CustomerId: number | null
  }

  export type ShipmentPlanMinAggregateOutputType = {
    Id: number | null
    CustomerId: number | null
  }

  export type ShipmentPlanMaxAggregateOutputType = {
    Id: number | null
    CustomerId: number | null
  }

  export type ShipmentPlanCountAggregateOutputType = {
    Id: number
    CustomerId: number
    _all: number
  }


  export type ShipmentPlanAvgAggregateInputType = {
    Id?: true
    CustomerId?: true
  }

  export type ShipmentPlanSumAggregateInputType = {
    Id?: true
    CustomerId?: true
  }

  export type ShipmentPlanMinAggregateInputType = {
    Id?: true
    CustomerId?: true
  }

  export type ShipmentPlanMaxAggregateInputType = {
    Id?: true
    CustomerId?: true
  }

  export type ShipmentPlanCountAggregateInputType = {
    Id?: true
    CustomerId?: true
    _all?: true
  }

  export type ShipmentPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentPlan to aggregate.
     */
    where?: ShipmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlans to fetch.
     */
    orderBy?: ShipmentPlanOrderByWithRelationInput | ShipmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentPlans
    **/
    _count?: true | ShipmentPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentPlanMaxAggregateInputType
  }

  export type GetShipmentPlanAggregateType<T extends ShipmentPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentPlan[P]>
      : GetScalarType<T[P], AggregateShipmentPlan[P]>
  }




  export type ShipmentPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentPlanWhereInput
    orderBy?: ShipmentPlanOrderByWithAggregationInput | ShipmentPlanOrderByWithAggregationInput[]
    by: ShipmentPlanScalarFieldEnum[] | ShipmentPlanScalarFieldEnum
    having?: ShipmentPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentPlanCountAggregateInputType | true
    _avg?: ShipmentPlanAvgAggregateInputType
    _sum?: ShipmentPlanSumAggregateInputType
    _min?: ShipmentPlanMinAggregateInputType
    _max?: ShipmentPlanMaxAggregateInputType
  }

  export type ShipmentPlanGroupByOutputType = {
    Id: number
    CustomerId: number
    _count: ShipmentPlanCountAggregateOutputType | null
    _avg: ShipmentPlanAvgAggregateOutputType | null
    _sum: ShipmentPlanSumAggregateOutputType | null
    _min: ShipmentPlanMinAggregateOutputType | null
    _max: ShipmentPlanMaxAggregateOutputType | null
  }

  type GetShipmentPlanGroupByPayload<T extends ShipmentPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentPlanGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentPlanGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    CustomerId?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    ShipmentPlanDetail?: boolean | ShipmentPlan$ShipmentPlanDetailArgs<ExtArgs>
    _count?: boolean | ShipmentPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentPlan"]>



  export type ShipmentPlanSelectScalar = {
    Id?: boolean
    CustomerId?: boolean
  }

  export type ShipmentPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "CustomerId", ExtArgs["result"]["shipmentPlan"]>
  export type ShipmentPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    ShipmentPlanDetail?: boolean | ShipmentPlan$ShipmentPlanDetailArgs<ExtArgs>
    _count?: boolean | ShipmentPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShipmentPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentPlan"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>
      ShipmentPlanDetail: Prisma.$ShipmentPlanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      CustomerId: number
    }, ExtArgs["result"]["shipmentPlan"]>
    composites: {}
  }

  type ShipmentPlanGetPayload<S extends boolean | null | undefined | ShipmentPlanDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPlanPayload, S>

  type ShipmentPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentPlanCountAggregateInputType | true
    }

  export interface ShipmentPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentPlan'], meta: { name: 'ShipmentPlan' } }
    /**
     * Find zero or one ShipmentPlan that matches the filter.
     * @param {ShipmentPlanFindUniqueArgs} args - Arguments to find a ShipmentPlan
     * @example
     * // Get one ShipmentPlan
     * const shipmentPlan = await prisma.shipmentPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentPlanFindUniqueArgs>(args: SelectSubset<T, ShipmentPlanFindUniqueArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentPlanFindUniqueOrThrowArgs} args - Arguments to find a ShipmentPlan
     * @example
     * // Get one ShipmentPlan
     * const shipmentPlan = await prisma.shipmentPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanFindFirstArgs} args - Arguments to find a ShipmentPlan
     * @example
     * // Get one ShipmentPlan
     * const shipmentPlan = await prisma.shipmentPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentPlanFindFirstArgs>(args?: SelectSubset<T, ShipmentPlanFindFirstArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanFindFirstOrThrowArgs} args - Arguments to find a ShipmentPlan
     * @example
     * // Get one ShipmentPlan
     * const shipmentPlan = await prisma.shipmentPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentPlans
     * const shipmentPlans = await prisma.shipmentPlan.findMany()
     * 
     * // Get first 10 ShipmentPlans
     * const shipmentPlans = await prisma.shipmentPlan.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const shipmentPlanWithIdOnly = await prisma.shipmentPlan.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ShipmentPlanFindManyArgs>(args?: SelectSubset<T, ShipmentPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentPlan.
     * @param {ShipmentPlanCreateArgs} args - Arguments to create a ShipmentPlan.
     * @example
     * // Create one ShipmentPlan
     * const ShipmentPlan = await prisma.shipmentPlan.create({
     *   data: {
     *     // ... data to create a ShipmentPlan
     *   }
     * })
     * 
     */
    create<T extends ShipmentPlanCreateArgs>(args: SelectSubset<T, ShipmentPlanCreateArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentPlans.
     * @param {ShipmentPlanCreateManyArgs} args - Arguments to create many ShipmentPlans.
     * @example
     * // Create many ShipmentPlans
     * const shipmentPlan = await prisma.shipmentPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentPlanCreateManyArgs>(args?: SelectSubset<T, ShipmentPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShipmentPlan.
     * @param {ShipmentPlanDeleteArgs} args - Arguments to delete one ShipmentPlan.
     * @example
     * // Delete one ShipmentPlan
     * const ShipmentPlan = await prisma.shipmentPlan.delete({
     *   where: {
     *     // ... filter to delete one ShipmentPlan
     *   }
     * })
     * 
     */
    delete<T extends ShipmentPlanDeleteArgs>(args: SelectSubset<T, ShipmentPlanDeleteArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentPlan.
     * @param {ShipmentPlanUpdateArgs} args - Arguments to update one ShipmentPlan.
     * @example
     * // Update one ShipmentPlan
     * const shipmentPlan = await prisma.shipmentPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentPlanUpdateArgs>(args: SelectSubset<T, ShipmentPlanUpdateArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentPlans.
     * @param {ShipmentPlanDeleteManyArgs} args - Arguments to filter ShipmentPlans to delete.
     * @example
     * // Delete a few ShipmentPlans
     * const { count } = await prisma.shipmentPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentPlanDeleteManyArgs>(args?: SelectSubset<T, ShipmentPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentPlans
     * const shipmentPlan = await prisma.shipmentPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentPlanUpdateManyArgs>(args: SelectSubset<T, ShipmentPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShipmentPlan.
     * @param {ShipmentPlanUpsertArgs} args - Arguments to update or create a ShipmentPlan.
     * @example
     * // Update or create a ShipmentPlan
     * const shipmentPlan = await prisma.shipmentPlan.upsert({
     *   create: {
     *     // ... data to create a ShipmentPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentPlan we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentPlanUpsertArgs>(args: SelectSubset<T, ShipmentPlanUpsertArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanCountArgs} args - Arguments to filter ShipmentPlans to count.
     * @example
     * // Count the number of ShipmentPlans
     * const count = await prisma.shipmentPlan.count({
     *   where: {
     *     // ... the filter for the ShipmentPlans we want to count
     *   }
     * })
    **/
    count<T extends ShipmentPlanCountArgs>(
      args?: Subset<T, ShipmentPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentPlanAggregateArgs>(args: Subset<T, ShipmentPlanAggregateArgs>): Prisma.PrismaPromise<GetShipmentPlanAggregateType<T>>

    /**
     * Group by ShipmentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentPlanGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentPlan model
   */
  readonly fields: ShipmentPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ShipmentPlanDetail<T extends ShipmentPlan$ShipmentPlanDetailArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentPlan$ShipmentPlanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentPlan model
   */
  interface ShipmentPlanFieldRefs {
    readonly Id: FieldRef<"ShipmentPlan", 'Int'>
    readonly CustomerId: FieldRef<"ShipmentPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentPlan findUnique
   */
  export type ShipmentPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlan to fetch.
     */
    where: ShipmentPlanWhereUniqueInput
  }

  /**
   * ShipmentPlan findUniqueOrThrow
   */
  export type ShipmentPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlan to fetch.
     */
    where: ShipmentPlanWhereUniqueInput
  }

  /**
   * ShipmentPlan findFirst
   */
  export type ShipmentPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlan to fetch.
     */
    where?: ShipmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlans to fetch.
     */
    orderBy?: ShipmentPlanOrderByWithRelationInput | ShipmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentPlans.
     */
    cursor?: ShipmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentPlans.
     */
    distinct?: ShipmentPlanScalarFieldEnum | ShipmentPlanScalarFieldEnum[]
  }

  /**
   * ShipmentPlan findFirstOrThrow
   */
  export type ShipmentPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlan to fetch.
     */
    where?: ShipmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlans to fetch.
     */
    orderBy?: ShipmentPlanOrderByWithRelationInput | ShipmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentPlans.
     */
    cursor?: ShipmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentPlans.
     */
    distinct?: ShipmentPlanScalarFieldEnum | ShipmentPlanScalarFieldEnum[]
  }

  /**
   * ShipmentPlan findMany
   */
  export type ShipmentPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlans to fetch.
     */
    where?: ShipmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlans to fetch.
     */
    orderBy?: ShipmentPlanOrderByWithRelationInput | ShipmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentPlans.
     */
    cursor?: ShipmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlans.
     */
    skip?: number
    distinct?: ShipmentPlanScalarFieldEnum | ShipmentPlanScalarFieldEnum[]
  }

  /**
   * ShipmentPlan create
   */
  export type ShipmentPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentPlan.
     */
    data: XOR<ShipmentPlanCreateInput, ShipmentPlanUncheckedCreateInput>
  }

  /**
   * ShipmentPlan createMany
   */
  export type ShipmentPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentPlans.
     */
    data: ShipmentPlanCreateManyInput | ShipmentPlanCreateManyInput[]
  }

  /**
   * ShipmentPlan update
   */
  export type ShipmentPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentPlan.
     */
    data: XOR<ShipmentPlanUpdateInput, ShipmentPlanUncheckedUpdateInput>
    /**
     * Choose, which ShipmentPlan to update.
     */
    where: ShipmentPlanWhereUniqueInput
  }

  /**
   * ShipmentPlan updateMany
   */
  export type ShipmentPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentPlans.
     */
    data: XOR<ShipmentPlanUpdateManyMutationInput, ShipmentPlanUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentPlans to update
     */
    where?: ShipmentPlanWhereInput
    /**
     * Limit how many ShipmentPlans to update.
     */
    limit?: number
  }

  /**
   * ShipmentPlan upsert
   */
  export type ShipmentPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentPlan to update in case it exists.
     */
    where: ShipmentPlanWhereUniqueInput
    /**
     * In case the ShipmentPlan found by the `where` argument doesn't exist, create a new ShipmentPlan with this data.
     */
    create: XOR<ShipmentPlanCreateInput, ShipmentPlanUncheckedCreateInput>
    /**
     * In case the ShipmentPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentPlanUpdateInput, ShipmentPlanUncheckedUpdateInput>
  }

  /**
   * ShipmentPlan delete
   */
  export type ShipmentPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
    /**
     * Filter which ShipmentPlan to delete.
     */
    where: ShipmentPlanWhereUniqueInput
  }

  /**
   * ShipmentPlan deleteMany
   */
  export type ShipmentPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentPlans to delete
     */
    where?: ShipmentPlanWhereInput
    /**
     * Limit how many ShipmentPlans to delete.
     */
    limit?: number
  }

  /**
   * ShipmentPlan.ShipmentPlanDetail
   */
  export type ShipmentPlan$ShipmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    where?: ShipmentPlanDetailWhereInput
    orderBy?: ShipmentPlanDetailOrderByWithRelationInput | ShipmentPlanDetailOrderByWithRelationInput[]
    cursor?: ShipmentPlanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentPlanDetailScalarFieldEnum | ShipmentPlanDetailScalarFieldEnum[]
  }

  /**
   * ShipmentPlan without action
   */
  export type ShipmentPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlan
     */
    select?: ShipmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlan
     */
    omit?: ShipmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentPlanDetail
   */

  export type AggregateShipmentPlanDetail = {
    _count: ShipmentPlanDetailCountAggregateOutputType | null
    _avg: ShipmentPlanDetailAvgAggregateOutputType | null
    _sum: ShipmentPlanDetailSumAggregateOutputType | null
    _min: ShipmentPlanDetailMinAggregateOutputType | null
    _max: ShipmentPlanDetailMaxAggregateOutputType | null
  }

  export type ShipmentPlanDetailAvgAggregateOutputType = {
    Id: number | null
    ShipmentPlanId: number | null
    ProductId: number | null
    Quantity: number | null
  }

  export type ShipmentPlanDetailSumAggregateOutputType = {
    Id: number | null
    ShipmentPlanId: number | null
    ProductId: number | null
    Quantity: number | null
  }

  export type ShipmentPlanDetailMinAggregateOutputType = {
    Id: number | null
    ShipmentPlanId: number | null
    ProductId: number | null
    Quantity: number | null
  }

  export type ShipmentPlanDetailMaxAggregateOutputType = {
    Id: number | null
    ShipmentPlanId: number | null
    ProductId: number | null
    Quantity: number | null
  }

  export type ShipmentPlanDetailCountAggregateOutputType = {
    Id: number
    ShipmentPlanId: number
    ProductId: number
    Quantity: number
    _all: number
  }


  export type ShipmentPlanDetailAvgAggregateInputType = {
    Id?: true
    ShipmentPlanId?: true
    ProductId?: true
    Quantity?: true
  }

  export type ShipmentPlanDetailSumAggregateInputType = {
    Id?: true
    ShipmentPlanId?: true
    ProductId?: true
    Quantity?: true
  }

  export type ShipmentPlanDetailMinAggregateInputType = {
    Id?: true
    ShipmentPlanId?: true
    ProductId?: true
    Quantity?: true
  }

  export type ShipmentPlanDetailMaxAggregateInputType = {
    Id?: true
    ShipmentPlanId?: true
    ProductId?: true
    Quantity?: true
  }

  export type ShipmentPlanDetailCountAggregateInputType = {
    Id?: true
    ShipmentPlanId?: true
    ProductId?: true
    Quantity?: true
    _all?: true
  }

  export type ShipmentPlanDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentPlanDetail to aggregate.
     */
    where?: ShipmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlanDetails to fetch.
     */
    orderBy?: ShipmentPlanDetailOrderByWithRelationInput | ShipmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentPlanDetails
    **/
    _count?: true | ShipmentPlanDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentPlanDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentPlanDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentPlanDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentPlanDetailMaxAggregateInputType
  }

  export type GetShipmentPlanDetailAggregateType<T extends ShipmentPlanDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentPlanDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentPlanDetail[P]>
      : GetScalarType<T[P], AggregateShipmentPlanDetail[P]>
  }




  export type ShipmentPlanDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentPlanDetailWhereInput
    orderBy?: ShipmentPlanDetailOrderByWithAggregationInput | ShipmentPlanDetailOrderByWithAggregationInput[]
    by: ShipmentPlanDetailScalarFieldEnum[] | ShipmentPlanDetailScalarFieldEnum
    having?: ShipmentPlanDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentPlanDetailCountAggregateInputType | true
    _avg?: ShipmentPlanDetailAvgAggregateInputType
    _sum?: ShipmentPlanDetailSumAggregateInputType
    _min?: ShipmentPlanDetailMinAggregateInputType
    _max?: ShipmentPlanDetailMaxAggregateInputType
  }

  export type ShipmentPlanDetailGroupByOutputType = {
    Id: number
    ShipmentPlanId: number
    ProductId: number
    Quantity: number
    _count: ShipmentPlanDetailCountAggregateOutputType | null
    _avg: ShipmentPlanDetailAvgAggregateOutputType | null
    _sum: ShipmentPlanDetailSumAggregateOutputType | null
    _min: ShipmentPlanDetailMinAggregateOutputType | null
    _max: ShipmentPlanDetailMaxAggregateOutputType | null
  }

  type GetShipmentPlanDetailGroupByPayload<T extends ShipmentPlanDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentPlanDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentPlanDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentPlanDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentPlanDetailGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentPlanDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ShipmentPlanId?: boolean
    ProductId?: boolean
    Quantity?: boolean
    ShipmentAchievementDetail?: boolean | ShipmentPlanDetail$ShipmentAchievementDetailArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ShipmentPlan?: boolean | ShipmentPlanDefaultArgs<ExtArgs>
    _count?: boolean | ShipmentPlanDetailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentPlanDetail"]>



  export type ShipmentPlanDetailSelectScalar = {
    Id?: boolean
    ShipmentPlanId?: boolean
    ProductId?: boolean
    Quantity?: boolean
  }

  export type ShipmentPlanDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "ShipmentPlanId" | "ProductId" | "Quantity", ExtArgs["result"]["shipmentPlanDetail"]>
  export type ShipmentPlanDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ShipmentAchievementDetail?: boolean | ShipmentPlanDetail$ShipmentAchievementDetailArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    ShipmentPlan?: boolean | ShipmentPlanDefaultArgs<ExtArgs>
    _count?: boolean | ShipmentPlanDetailCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShipmentPlanDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentPlanDetail"
    objects: {
      ShipmentAchievementDetail: Prisma.$ShipmentAchievementDetailPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>
      ShipmentPlan: Prisma.$ShipmentPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ShipmentPlanId: number
      ProductId: number
      Quantity: number
    }, ExtArgs["result"]["shipmentPlanDetail"]>
    composites: {}
  }

  type ShipmentPlanDetailGetPayload<S extends boolean | null | undefined | ShipmentPlanDetailDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPlanDetailPayload, S>

  type ShipmentPlanDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentPlanDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentPlanDetailCountAggregateInputType | true
    }

  export interface ShipmentPlanDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentPlanDetail'], meta: { name: 'ShipmentPlanDetail' } }
    /**
     * Find zero or one ShipmentPlanDetail that matches the filter.
     * @param {ShipmentPlanDetailFindUniqueArgs} args - Arguments to find a ShipmentPlanDetail
     * @example
     * // Get one ShipmentPlanDetail
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentPlanDetailFindUniqueArgs>(args: SelectSubset<T, ShipmentPlanDetailFindUniqueArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentPlanDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentPlanDetailFindUniqueOrThrowArgs} args - Arguments to find a ShipmentPlanDetail
     * @example
     * // Get one ShipmentPlanDetail
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentPlanDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentPlanDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentPlanDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailFindFirstArgs} args - Arguments to find a ShipmentPlanDetail
     * @example
     * // Get one ShipmentPlanDetail
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentPlanDetailFindFirstArgs>(args?: SelectSubset<T, ShipmentPlanDetailFindFirstArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentPlanDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailFindFirstOrThrowArgs} args - Arguments to find a ShipmentPlanDetail
     * @example
     * // Get one ShipmentPlanDetail
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentPlanDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentPlanDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentPlanDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentPlanDetails
     * const shipmentPlanDetails = await prisma.shipmentPlanDetail.findMany()
     * 
     * // Get first 10 ShipmentPlanDetails
     * const shipmentPlanDetails = await prisma.shipmentPlanDetail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const shipmentPlanDetailWithIdOnly = await prisma.shipmentPlanDetail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ShipmentPlanDetailFindManyArgs>(args?: SelectSubset<T, ShipmentPlanDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentPlanDetail.
     * @param {ShipmentPlanDetailCreateArgs} args - Arguments to create a ShipmentPlanDetail.
     * @example
     * // Create one ShipmentPlanDetail
     * const ShipmentPlanDetail = await prisma.shipmentPlanDetail.create({
     *   data: {
     *     // ... data to create a ShipmentPlanDetail
     *   }
     * })
     * 
     */
    create<T extends ShipmentPlanDetailCreateArgs>(args: SelectSubset<T, ShipmentPlanDetailCreateArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentPlanDetails.
     * @param {ShipmentPlanDetailCreateManyArgs} args - Arguments to create many ShipmentPlanDetails.
     * @example
     * // Create many ShipmentPlanDetails
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentPlanDetailCreateManyArgs>(args?: SelectSubset<T, ShipmentPlanDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShipmentPlanDetail.
     * @param {ShipmentPlanDetailDeleteArgs} args - Arguments to delete one ShipmentPlanDetail.
     * @example
     * // Delete one ShipmentPlanDetail
     * const ShipmentPlanDetail = await prisma.shipmentPlanDetail.delete({
     *   where: {
     *     // ... filter to delete one ShipmentPlanDetail
     *   }
     * })
     * 
     */
    delete<T extends ShipmentPlanDetailDeleteArgs>(args: SelectSubset<T, ShipmentPlanDetailDeleteArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentPlanDetail.
     * @param {ShipmentPlanDetailUpdateArgs} args - Arguments to update one ShipmentPlanDetail.
     * @example
     * // Update one ShipmentPlanDetail
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentPlanDetailUpdateArgs>(args: SelectSubset<T, ShipmentPlanDetailUpdateArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentPlanDetails.
     * @param {ShipmentPlanDetailDeleteManyArgs} args - Arguments to filter ShipmentPlanDetails to delete.
     * @example
     * // Delete a few ShipmentPlanDetails
     * const { count } = await prisma.shipmentPlanDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentPlanDetailDeleteManyArgs>(args?: SelectSubset<T, ShipmentPlanDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentPlanDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentPlanDetails
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentPlanDetailUpdateManyArgs>(args: SelectSubset<T, ShipmentPlanDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShipmentPlanDetail.
     * @param {ShipmentPlanDetailUpsertArgs} args - Arguments to update or create a ShipmentPlanDetail.
     * @example
     * // Update or create a ShipmentPlanDetail
     * const shipmentPlanDetail = await prisma.shipmentPlanDetail.upsert({
     *   create: {
     *     // ... data to create a ShipmentPlanDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentPlanDetail we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentPlanDetailUpsertArgs>(args: SelectSubset<T, ShipmentPlanDetailUpsertArgs<ExtArgs>>): Prisma__ShipmentPlanDetailClient<$Result.GetResult<Prisma.$ShipmentPlanDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentPlanDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailCountArgs} args - Arguments to filter ShipmentPlanDetails to count.
     * @example
     * // Count the number of ShipmentPlanDetails
     * const count = await prisma.shipmentPlanDetail.count({
     *   where: {
     *     // ... the filter for the ShipmentPlanDetails we want to count
     *   }
     * })
    **/
    count<T extends ShipmentPlanDetailCountArgs>(
      args?: Subset<T, ShipmentPlanDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentPlanDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentPlanDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentPlanDetailAggregateArgs>(args: Subset<T, ShipmentPlanDetailAggregateArgs>): Prisma.PrismaPromise<GetShipmentPlanDetailAggregateType<T>>

    /**
     * Group by ShipmentPlanDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentPlanDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentPlanDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentPlanDetailGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentPlanDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentPlanDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentPlanDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentPlanDetail model
   */
  readonly fields: ShipmentPlanDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentPlanDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentPlanDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ShipmentAchievementDetail<T extends ShipmentPlanDetail$ShipmentAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentPlanDetail$ShipmentAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ShipmentPlan<T extends ShipmentPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentPlanDefaultArgs<ExtArgs>>): Prisma__ShipmentPlanClient<$Result.GetResult<Prisma.$ShipmentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentPlanDetail model
   */
  interface ShipmentPlanDetailFieldRefs {
    readonly Id: FieldRef<"ShipmentPlanDetail", 'Int'>
    readonly ShipmentPlanId: FieldRef<"ShipmentPlanDetail", 'Int'>
    readonly ProductId: FieldRef<"ShipmentPlanDetail", 'Int'>
    readonly Quantity: FieldRef<"ShipmentPlanDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentPlanDetail findUnique
   */
  export type ShipmentPlanDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlanDetail to fetch.
     */
    where: ShipmentPlanDetailWhereUniqueInput
  }

  /**
   * ShipmentPlanDetail findUniqueOrThrow
   */
  export type ShipmentPlanDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlanDetail to fetch.
     */
    where: ShipmentPlanDetailWhereUniqueInput
  }

  /**
   * ShipmentPlanDetail findFirst
   */
  export type ShipmentPlanDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlanDetail to fetch.
     */
    where?: ShipmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlanDetails to fetch.
     */
    orderBy?: ShipmentPlanDetailOrderByWithRelationInput | ShipmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentPlanDetails.
     */
    cursor?: ShipmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentPlanDetails.
     */
    distinct?: ShipmentPlanDetailScalarFieldEnum | ShipmentPlanDetailScalarFieldEnum[]
  }

  /**
   * ShipmentPlanDetail findFirstOrThrow
   */
  export type ShipmentPlanDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlanDetail to fetch.
     */
    where?: ShipmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlanDetails to fetch.
     */
    orderBy?: ShipmentPlanDetailOrderByWithRelationInput | ShipmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentPlanDetails.
     */
    cursor?: ShipmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentPlanDetails.
     */
    distinct?: ShipmentPlanDetailScalarFieldEnum | ShipmentPlanDetailScalarFieldEnum[]
  }

  /**
   * ShipmentPlanDetail findMany
   */
  export type ShipmentPlanDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentPlanDetails to fetch.
     */
    where?: ShipmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentPlanDetails to fetch.
     */
    orderBy?: ShipmentPlanDetailOrderByWithRelationInput | ShipmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentPlanDetails.
     */
    cursor?: ShipmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentPlanDetails.
     */
    skip?: number
    distinct?: ShipmentPlanDetailScalarFieldEnum | ShipmentPlanDetailScalarFieldEnum[]
  }

  /**
   * ShipmentPlanDetail create
   */
  export type ShipmentPlanDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentPlanDetail.
     */
    data: XOR<ShipmentPlanDetailCreateInput, ShipmentPlanDetailUncheckedCreateInput>
  }

  /**
   * ShipmentPlanDetail createMany
   */
  export type ShipmentPlanDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentPlanDetails.
     */
    data: ShipmentPlanDetailCreateManyInput | ShipmentPlanDetailCreateManyInput[]
  }

  /**
   * ShipmentPlanDetail update
   */
  export type ShipmentPlanDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentPlanDetail.
     */
    data: XOR<ShipmentPlanDetailUpdateInput, ShipmentPlanDetailUncheckedUpdateInput>
    /**
     * Choose, which ShipmentPlanDetail to update.
     */
    where: ShipmentPlanDetailWhereUniqueInput
  }

  /**
   * ShipmentPlanDetail updateMany
   */
  export type ShipmentPlanDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentPlanDetails.
     */
    data: XOR<ShipmentPlanDetailUpdateManyMutationInput, ShipmentPlanDetailUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentPlanDetails to update
     */
    where?: ShipmentPlanDetailWhereInput
    /**
     * Limit how many ShipmentPlanDetails to update.
     */
    limit?: number
  }

  /**
   * ShipmentPlanDetail upsert
   */
  export type ShipmentPlanDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentPlanDetail to update in case it exists.
     */
    where: ShipmentPlanDetailWhereUniqueInput
    /**
     * In case the ShipmentPlanDetail found by the `where` argument doesn't exist, create a new ShipmentPlanDetail with this data.
     */
    create: XOR<ShipmentPlanDetailCreateInput, ShipmentPlanDetailUncheckedCreateInput>
    /**
     * In case the ShipmentPlanDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentPlanDetailUpdateInput, ShipmentPlanDetailUncheckedUpdateInput>
  }

  /**
   * ShipmentPlanDetail delete
   */
  export type ShipmentPlanDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter which ShipmentPlanDetail to delete.
     */
    where: ShipmentPlanDetailWhereUniqueInput
  }

  /**
   * ShipmentPlanDetail deleteMany
   */
  export type ShipmentPlanDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentPlanDetails to delete
     */
    where?: ShipmentPlanDetailWhereInput
    /**
     * Limit how many ShipmentPlanDetails to delete.
     */
    limit?: number
  }

  /**
   * ShipmentPlanDetail.ShipmentAchievementDetail
   */
  export type ShipmentPlanDetail$ShipmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentAchievementDetail
     */
    select?: ShipmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentAchievementDetail
     */
    omit?: ShipmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentAchievementDetailInclude<ExtArgs> | null
    where?: ShipmentAchievementDetailWhereInput
    orderBy?: ShipmentAchievementDetailOrderByWithRelationInput | ShipmentAchievementDetailOrderByWithRelationInput[]
    cursor?: ShipmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentAchievementDetailScalarFieldEnum | ShipmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * ShipmentPlanDetail without action
   */
  export type ShipmentPlanDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentPlanDetail
     */
    select?: ShipmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentPlanDetail
     */
    omit?: ShipmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentPlanDetailInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentAchievement
   */

  export type AggregateTreatmentAchievement = {
    _count: TreatmentAchievementCountAggregateOutputType | null
    _avg: TreatmentAchievementAvgAggregateOutputType | null
    _sum: TreatmentAchievementSumAggregateOutputType | null
    _min: TreatmentAchievementMinAggregateOutputType | null
    _max: TreatmentAchievementMaxAggregateOutputType | null
  }

  export type TreatmentAchievementAvgAggregateOutputType = {
    Id: number | null
    EmployeeId: number | null
  }

  export type TreatmentAchievementSumAggregateOutputType = {
    Id: number | null
    EmployeeId: number | null
  }

  export type TreatmentAchievementMinAggregateOutputType = {
    Id: number | null
    TreatedAt: Date | null
    EmployeeId: number | null
  }

  export type TreatmentAchievementMaxAggregateOutputType = {
    Id: number | null
    TreatedAt: Date | null
    EmployeeId: number | null
  }

  export type TreatmentAchievementCountAggregateOutputType = {
    Id: number
    TreatedAt: number
    EmployeeId: number
    _all: number
  }


  export type TreatmentAchievementAvgAggregateInputType = {
    Id?: true
    EmployeeId?: true
  }

  export type TreatmentAchievementSumAggregateInputType = {
    Id?: true
    EmployeeId?: true
  }

  export type TreatmentAchievementMinAggregateInputType = {
    Id?: true
    TreatedAt?: true
    EmployeeId?: true
  }

  export type TreatmentAchievementMaxAggregateInputType = {
    Id?: true
    TreatedAt?: true
    EmployeeId?: true
  }

  export type TreatmentAchievementCountAggregateInputType = {
    Id?: true
    TreatedAt?: true
    EmployeeId?: true
    _all?: true
  }

  export type TreatmentAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentAchievement to aggregate.
     */
    where?: TreatmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievements to fetch.
     */
    orderBy?: TreatmentAchievementOrderByWithRelationInput | TreatmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentAchievements
    **/
    _count?: true | TreatmentAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentAchievementMaxAggregateInputType
  }

  export type GetTreatmentAchievementAggregateType<T extends TreatmentAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentAchievement[P]>
      : GetScalarType<T[P], AggregateTreatmentAchievement[P]>
  }




  export type TreatmentAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementWhereInput
    orderBy?: TreatmentAchievementOrderByWithAggregationInput | TreatmentAchievementOrderByWithAggregationInput[]
    by: TreatmentAchievementScalarFieldEnum[] | TreatmentAchievementScalarFieldEnum
    having?: TreatmentAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentAchievementCountAggregateInputType | true
    _avg?: TreatmentAchievementAvgAggregateInputType
    _sum?: TreatmentAchievementSumAggregateInputType
    _min?: TreatmentAchievementMinAggregateInputType
    _max?: TreatmentAchievementMaxAggregateInputType
  }

  export type TreatmentAchievementGroupByOutputType = {
    Id: number
    TreatedAt: Date
    EmployeeId: number
    _count: TreatmentAchievementCountAggregateOutputType | null
    _avg: TreatmentAchievementAvgAggregateOutputType | null
    _sum: TreatmentAchievementSumAggregateOutputType | null
    _min: TreatmentAchievementMinAggregateOutputType | null
    _max: TreatmentAchievementMaxAggregateOutputType | null
  }

  type GetTreatmentAchievementGroupByPayload<T extends TreatmentAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentAchievementGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    TreatedAt?: boolean
    EmployeeId?: boolean
    Employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    TreatmentAchievementDetail?: boolean | TreatmentAchievement$TreatmentAchievementDetailArgs<ExtArgs>
    _count?: boolean | TreatmentAchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentAchievement"]>



  export type TreatmentAchievementSelectScalar = {
    Id?: boolean
    TreatedAt?: boolean
    EmployeeId?: boolean
  }

  export type TreatmentAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "TreatedAt" | "EmployeeId", ExtArgs["result"]["treatmentAchievement"]>
  export type TreatmentAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    TreatmentAchievementDetail?: boolean | TreatmentAchievement$TreatmentAchievementDetailArgs<ExtArgs>
    _count?: boolean | TreatmentAchievementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TreatmentAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentAchievement"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs>
      TreatmentAchievementDetail: Prisma.$TreatmentAchievementDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      TreatedAt: Date
      EmployeeId: number
    }, ExtArgs["result"]["treatmentAchievement"]>
    composites: {}
  }

  type TreatmentAchievementGetPayload<S extends boolean | null | undefined | TreatmentAchievementDefaultArgs> = $Result.GetResult<Prisma.$TreatmentAchievementPayload, S>

  type TreatmentAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentAchievementCountAggregateInputType | true
    }

  export interface TreatmentAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentAchievement'], meta: { name: 'TreatmentAchievement' } }
    /**
     * Find zero or one TreatmentAchievement that matches the filter.
     * @param {TreatmentAchievementFindUniqueArgs} args - Arguments to find a TreatmentAchievement
     * @example
     * // Get one TreatmentAchievement
     * const treatmentAchievement = await prisma.treatmentAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentAchievementFindUniqueArgs>(args: SelectSubset<T, TreatmentAchievementFindUniqueArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentAchievementFindUniqueOrThrowArgs} args - Arguments to find a TreatmentAchievement
     * @example
     * // Get one TreatmentAchievement
     * const treatmentAchievement = await prisma.treatmentAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementFindFirstArgs} args - Arguments to find a TreatmentAchievement
     * @example
     * // Get one TreatmentAchievement
     * const treatmentAchievement = await prisma.treatmentAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentAchievementFindFirstArgs>(args?: SelectSubset<T, TreatmentAchievementFindFirstArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementFindFirstOrThrowArgs} args - Arguments to find a TreatmentAchievement
     * @example
     * // Get one TreatmentAchievement
     * const treatmentAchievement = await prisma.treatmentAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentAchievements
     * const treatmentAchievements = await prisma.treatmentAchievement.findMany()
     * 
     * // Get first 10 TreatmentAchievements
     * const treatmentAchievements = await prisma.treatmentAchievement.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const treatmentAchievementWithIdOnly = await prisma.treatmentAchievement.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TreatmentAchievementFindManyArgs>(args?: SelectSubset<T, TreatmentAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentAchievement.
     * @param {TreatmentAchievementCreateArgs} args - Arguments to create a TreatmentAchievement.
     * @example
     * // Create one TreatmentAchievement
     * const TreatmentAchievement = await prisma.treatmentAchievement.create({
     *   data: {
     *     // ... data to create a TreatmentAchievement
     *   }
     * })
     * 
     */
    create<T extends TreatmentAchievementCreateArgs>(args: SelectSubset<T, TreatmentAchievementCreateArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentAchievements.
     * @param {TreatmentAchievementCreateManyArgs} args - Arguments to create many TreatmentAchievements.
     * @example
     * // Create many TreatmentAchievements
     * const treatmentAchievement = await prisma.treatmentAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentAchievementCreateManyArgs>(args?: SelectSubset<T, TreatmentAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TreatmentAchievement.
     * @param {TreatmentAchievementDeleteArgs} args - Arguments to delete one TreatmentAchievement.
     * @example
     * // Delete one TreatmentAchievement
     * const TreatmentAchievement = await prisma.treatmentAchievement.delete({
     *   where: {
     *     // ... filter to delete one TreatmentAchievement
     *   }
     * })
     * 
     */
    delete<T extends TreatmentAchievementDeleteArgs>(args: SelectSubset<T, TreatmentAchievementDeleteArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentAchievement.
     * @param {TreatmentAchievementUpdateArgs} args - Arguments to update one TreatmentAchievement.
     * @example
     * // Update one TreatmentAchievement
     * const treatmentAchievement = await prisma.treatmentAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentAchievementUpdateArgs>(args: SelectSubset<T, TreatmentAchievementUpdateArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentAchievements.
     * @param {TreatmentAchievementDeleteManyArgs} args - Arguments to filter TreatmentAchievements to delete.
     * @example
     * // Delete a few TreatmentAchievements
     * const { count } = await prisma.treatmentAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentAchievementDeleteManyArgs>(args?: SelectSubset<T, TreatmentAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentAchievements
     * const treatmentAchievement = await prisma.treatmentAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentAchievementUpdateManyArgs>(args: SelectSubset<T, TreatmentAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreatmentAchievement.
     * @param {TreatmentAchievementUpsertArgs} args - Arguments to update or create a TreatmentAchievement.
     * @example
     * // Update or create a TreatmentAchievement
     * const treatmentAchievement = await prisma.treatmentAchievement.upsert({
     *   create: {
     *     // ... data to create a TreatmentAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentAchievement we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentAchievementUpsertArgs>(args: SelectSubset<T, TreatmentAchievementUpsertArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementCountArgs} args - Arguments to filter TreatmentAchievements to count.
     * @example
     * // Count the number of TreatmentAchievements
     * const count = await prisma.treatmentAchievement.count({
     *   where: {
     *     // ... the filter for the TreatmentAchievements we want to count
     *   }
     * })
    **/
    count<T extends TreatmentAchievementCountArgs>(
      args?: Subset<T, TreatmentAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentAchievementAggregateArgs>(args: Subset<T, TreatmentAchievementAggregateArgs>): Prisma.PrismaPromise<GetTreatmentAchievementAggregateType<T>>

    /**
     * Group by TreatmentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentAchievementGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentAchievement model
   */
  readonly fields: TreatmentAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TreatmentAchievementDetail<T extends TreatmentAchievement$TreatmentAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentAchievement$TreatmentAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentAchievement model
   */
  interface TreatmentAchievementFieldRefs {
    readonly Id: FieldRef<"TreatmentAchievement", 'Int'>
    readonly TreatedAt: FieldRef<"TreatmentAchievement", 'DateTime'>
    readonly EmployeeId: FieldRef<"TreatmentAchievement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentAchievement findUnique
   */
  export type TreatmentAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievement to fetch.
     */
    where: TreatmentAchievementWhereUniqueInput
  }

  /**
   * TreatmentAchievement findUniqueOrThrow
   */
  export type TreatmentAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievement to fetch.
     */
    where: TreatmentAchievementWhereUniqueInput
  }

  /**
   * TreatmentAchievement findFirst
   */
  export type TreatmentAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievement to fetch.
     */
    where?: TreatmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievements to fetch.
     */
    orderBy?: TreatmentAchievementOrderByWithRelationInput | TreatmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentAchievements.
     */
    cursor?: TreatmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentAchievements.
     */
    distinct?: TreatmentAchievementScalarFieldEnum | TreatmentAchievementScalarFieldEnum[]
  }

  /**
   * TreatmentAchievement findFirstOrThrow
   */
  export type TreatmentAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievement to fetch.
     */
    where?: TreatmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievements to fetch.
     */
    orderBy?: TreatmentAchievementOrderByWithRelationInput | TreatmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentAchievements.
     */
    cursor?: TreatmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentAchievements.
     */
    distinct?: TreatmentAchievementScalarFieldEnum | TreatmentAchievementScalarFieldEnum[]
  }

  /**
   * TreatmentAchievement findMany
   */
  export type TreatmentAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievements to fetch.
     */
    where?: TreatmentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievements to fetch.
     */
    orderBy?: TreatmentAchievementOrderByWithRelationInput | TreatmentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentAchievements.
     */
    cursor?: TreatmentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievements.
     */
    skip?: number
    distinct?: TreatmentAchievementScalarFieldEnum | TreatmentAchievementScalarFieldEnum[]
  }

  /**
   * TreatmentAchievement create
   */
  export type TreatmentAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentAchievement.
     */
    data: XOR<TreatmentAchievementCreateInput, TreatmentAchievementUncheckedCreateInput>
  }

  /**
   * TreatmentAchievement createMany
   */
  export type TreatmentAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentAchievements.
     */
    data: TreatmentAchievementCreateManyInput | TreatmentAchievementCreateManyInput[]
  }

  /**
   * TreatmentAchievement update
   */
  export type TreatmentAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentAchievement.
     */
    data: XOR<TreatmentAchievementUpdateInput, TreatmentAchievementUncheckedUpdateInput>
    /**
     * Choose, which TreatmentAchievement to update.
     */
    where: TreatmentAchievementWhereUniqueInput
  }

  /**
   * TreatmentAchievement updateMany
   */
  export type TreatmentAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentAchievements.
     */
    data: XOR<TreatmentAchievementUpdateManyMutationInput, TreatmentAchievementUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentAchievements to update
     */
    where?: TreatmentAchievementWhereInput
    /**
     * Limit how many TreatmentAchievements to update.
     */
    limit?: number
  }

  /**
   * TreatmentAchievement upsert
   */
  export type TreatmentAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentAchievement to update in case it exists.
     */
    where: TreatmentAchievementWhereUniqueInput
    /**
     * In case the TreatmentAchievement found by the `where` argument doesn't exist, create a new TreatmentAchievement with this data.
     */
    create: XOR<TreatmentAchievementCreateInput, TreatmentAchievementUncheckedCreateInput>
    /**
     * In case the TreatmentAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentAchievementUpdateInput, TreatmentAchievementUncheckedUpdateInput>
  }

  /**
   * TreatmentAchievement delete
   */
  export type TreatmentAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
    /**
     * Filter which TreatmentAchievement to delete.
     */
    where: TreatmentAchievementWhereUniqueInput
  }

  /**
   * TreatmentAchievement deleteMany
   */
  export type TreatmentAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentAchievements to delete
     */
    where?: TreatmentAchievementWhereInput
    /**
     * Limit how many TreatmentAchievements to delete.
     */
    limit?: number
  }

  /**
   * TreatmentAchievement.TreatmentAchievementDetail
   */
  export type TreatmentAchievement$TreatmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    where?: TreatmentAchievementDetailWhereInput
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * TreatmentAchievement without action
   */
  export type TreatmentAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievement
     */
    select?: TreatmentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievement
     */
    omit?: TreatmentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentAchievementDetail
   */

  export type AggregateTreatmentAchievementDetail = {
    _count: TreatmentAchievementDetailCountAggregateOutputType | null
    _avg: TreatmentAchievementDetailAvgAggregateOutputType | null
    _sum: TreatmentAchievementDetailSumAggregateOutputType | null
    _min: TreatmentAchievementDetailMinAggregateOutputType | null
    _max: TreatmentAchievementDetailMaxAggregateOutputType | null
  }

  export type TreatmentAchievementDetailAvgAggregateOutputType = {
    Id: number | null
    TreatmentAchievementId: number | null
    TreatmentPlanDetailId: number | null
    UsedProductStockId: number | null
    ProducedProductStockId: number | null
  }

  export type TreatmentAchievementDetailSumAggregateOutputType = {
    Id: number | null
    TreatmentAchievementId: number | null
    TreatmentPlanDetailId: number | null
    UsedProductStockId: number | null
    ProducedProductStockId: number | null
  }

  export type TreatmentAchievementDetailMinAggregateOutputType = {
    Id: number | null
    TreatmentAchievementId: number | null
    TreatmentPlanDetailId: number | null
    UsedProductStockId: number | null
    ProducedProductStockId: number | null
  }

  export type TreatmentAchievementDetailMaxAggregateOutputType = {
    Id: number | null
    TreatmentAchievementId: number | null
    TreatmentPlanDetailId: number | null
    UsedProductStockId: number | null
    ProducedProductStockId: number | null
  }

  export type TreatmentAchievementDetailCountAggregateOutputType = {
    Id: number
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
    ProducedProductStockId: number
    _all: number
  }


  export type TreatmentAchievementDetailAvgAggregateInputType = {
    Id?: true
    TreatmentAchievementId?: true
    TreatmentPlanDetailId?: true
    UsedProductStockId?: true
    ProducedProductStockId?: true
  }

  export type TreatmentAchievementDetailSumAggregateInputType = {
    Id?: true
    TreatmentAchievementId?: true
    TreatmentPlanDetailId?: true
    UsedProductStockId?: true
    ProducedProductStockId?: true
  }

  export type TreatmentAchievementDetailMinAggregateInputType = {
    Id?: true
    TreatmentAchievementId?: true
    TreatmentPlanDetailId?: true
    UsedProductStockId?: true
    ProducedProductStockId?: true
  }

  export type TreatmentAchievementDetailMaxAggregateInputType = {
    Id?: true
    TreatmentAchievementId?: true
    TreatmentPlanDetailId?: true
    UsedProductStockId?: true
    ProducedProductStockId?: true
  }

  export type TreatmentAchievementDetailCountAggregateInputType = {
    Id?: true
    TreatmentAchievementId?: true
    TreatmentPlanDetailId?: true
    UsedProductStockId?: true
    ProducedProductStockId?: true
    _all?: true
  }

  export type TreatmentAchievementDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentAchievementDetail to aggregate.
     */
    where?: TreatmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievementDetails to fetch.
     */
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentAchievementDetails
    **/
    _count?: true | TreatmentAchievementDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentAchievementDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentAchievementDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentAchievementDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentAchievementDetailMaxAggregateInputType
  }

  export type GetTreatmentAchievementDetailAggregateType<T extends TreatmentAchievementDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentAchievementDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentAchievementDetail[P]>
      : GetScalarType<T[P], AggregateTreatmentAchievementDetail[P]>
  }




  export type TreatmentAchievementDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentAchievementDetailWhereInput
    orderBy?: TreatmentAchievementDetailOrderByWithAggregationInput | TreatmentAchievementDetailOrderByWithAggregationInput[]
    by: TreatmentAchievementDetailScalarFieldEnum[] | TreatmentAchievementDetailScalarFieldEnum
    having?: TreatmentAchievementDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentAchievementDetailCountAggregateInputType | true
    _avg?: TreatmentAchievementDetailAvgAggregateInputType
    _sum?: TreatmentAchievementDetailSumAggregateInputType
    _min?: TreatmentAchievementDetailMinAggregateInputType
    _max?: TreatmentAchievementDetailMaxAggregateInputType
  }

  export type TreatmentAchievementDetailGroupByOutputType = {
    Id: number
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
    ProducedProductStockId: number
    _count: TreatmentAchievementDetailCountAggregateOutputType | null
    _avg: TreatmentAchievementDetailAvgAggregateOutputType | null
    _sum: TreatmentAchievementDetailSumAggregateOutputType | null
    _min: TreatmentAchievementDetailMinAggregateOutputType | null
    _max: TreatmentAchievementDetailMaxAggregateOutputType | null
  }

  type GetTreatmentAchievementDetailGroupByPayload<T extends TreatmentAchievementDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentAchievementDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentAchievementDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentAchievementDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentAchievementDetailGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentAchievementDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    TreatmentAchievementId?: boolean
    TreatmentPlanDetailId?: boolean
    UsedProductStockId?: boolean
    ProducedProductStockId?: boolean
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    TreatmentAchievement?: boolean | TreatmentAchievementDefaultArgs<ExtArgs>
    TreatmentPlanDetail?: boolean | TreatmentPlanDetailDefaultArgs<ExtArgs>
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentAchievementDetail"]>



  export type TreatmentAchievementDetailSelectScalar = {
    Id?: boolean
    TreatmentAchievementId?: boolean
    TreatmentPlanDetailId?: boolean
    UsedProductStockId?: boolean
    ProducedProductStockId?: boolean
  }

  export type TreatmentAchievementDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "TreatmentAchievementId" | "TreatmentPlanDetailId" | "UsedProductStockId" | "ProducedProductStockId", ExtArgs["result"]["treatmentAchievementDetail"]>
  export type TreatmentAchievementDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    TreatmentAchievement?: boolean | TreatmentAchievementDefaultArgs<ExtArgs>
    TreatmentPlanDetail?: boolean | TreatmentPlanDetailDefaultArgs<ExtArgs>
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
  }

  export type $TreatmentAchievementDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentAchievementDetail"
    objects: {
      ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: Prisma.$ProductStockPayload<ExtArgs>
      TreatmentAchievement: Prisma.$TreatmentAchievementPayload<ExtArgs>
      TreatmentPlanDetail: Prisma.$TreatmentPlanDetailPayload<ExtArgs>
      ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock: Prisma.$ProductStockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      TreatmentAchievementId: number
      TreatmentPlanDetailId: number
      UsedProductStockId: number
      ProducedProductStockId: number
    }, ExtArgs["result"]["treatmentAchievementDetail"]>
    composites: {}
  }

  type TreatmentAchievementDetailGetPayload<S extends boolean | null | undefined | TreatmentAchievementDetailDefaultArgs> = $Result.GetResult<Prisma.$TreatmentAchievementDetailPayload, S>

  type TreatmentAchievementDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentAchievementDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentAchievementDetailCountAggregateInputType | true
    }

  export interface TreatmentAchievementDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentAchievementDetail'], meta: { name: 'TreatmentAchievementDetail' } }
    /**
     * Find zero or one TreatmentAchievementDetail that matches the filter.
     * @param {TreatmentAchievementDetailFindUniqueArgs} args - Arguments to find a TreatmentAchievementDetail
     * @example
     * // Get one TreatmentAchievementDetail
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentAchievementDetailFindUniqueArgs>(args: SelectSubset<T, TreatmentAchievementDetailFindUniqueArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentAchievementDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentAchievementDetailFindUniqueOrThrowArgs} args - Arguments to find a TreatmentAchievementDetail
     * @example
     * // Get one TreatmentAchievementDetail
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentAchievementDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentAchievementDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentAchievementDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailFindFirstArgs} args - Arguments to find a TreatmentAchievementDetail
     * @example
     * // Get one TreatmentAchievementDetail
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentAchievementDetailFindFirstArgs>(args?: SelectSubset<T, TreatmentAchievementDetailFindFirstArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentAchievementDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailFindFirstOrThrowArgs} args - Arguments to find a TreatmentAchievementDetail
     * @example
     * // Get one TreatmentAchievementDetail
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentAchievementDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentAchievementDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentAchievementDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentAchievementDetails
     * const treatmentAchievementDetails = await prisma.treatmentAchievementDetail.findMany()
     * 
     * // Get first 10 TreatmentAchievementDetails
     * const treatmentAchievementDetails = await prisma.treatmentAchievementDetail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const treatmentAchievementDetailWithIdOnly = await prisma.treatmentAchievementDetail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TreatmentAchievementDetailFindManyArgs>(args?: SelectSubset<T, TreatmentAchievementDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentAchievementDetail.
     * @param {TreatmentAchievementDetailCreateArgs} args - Arguments to create a TreatmentAchievementDetail.
     * @example
     * // Create one TreatmentAchievementDetail
     * const TreatmentAchievementDetail = await prisma.treatmentAchievementDetail.create({
     *   data: {
     *     // ... data to create a TreatmentAchievementDetail
     *   }
     * })
     * 
     */
    create<T extends TreatmentAchievementDetailCreateArgs>(args: SelectSubset<T, TreatmentAchievementDetailCreateArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentAchievementDetails.
     * @param {TreatmentAchievementDetailCreateManyArgs} args - Arguments to create many TreatmentAchievementDetails.
     * @example
     * // Create many TreatmentAchievementDetails
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentAchievementDetailCreateManyArgs>(args?: SelectSubset<T, TreatmentAchievementDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TreatmentAchievementDetail.
     * @param {TreatmentAchievementDetailDeleteArgs} args - Arguments to delete one TreatmentAchievementDetail.
     * @example
     * // Delete one TreatmentAchievementDetail
     * const TreatmentAchievementDetail = await prisma.treatmentAchievementDetail.delete({
     *   where: {
     *     // ... filter to delete one TreatmentAchievementDetail
     *   }
     * })
     * 
     */
    delete<T extends TreatmentAchievementDetailDeleteArgs>(args: SelectSubset<T, TreatmentAchievementDetailDeleteArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentAchievementDetail.
     * @param {TreatmentAchievementDetailUpdateArgs} args - Arguments to update one TreatmentAchievementDetail.
     * @example
     * // Update one TreatmentAchievementDetail
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentAchievementDetailUpdateArgs>(args: SelectSubset<T, TreatmentAchievementDetailUpdateArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentAchievementDetails.
     * @param {TreatmentAchievementDetailDeleteManyArgs} args - Arguments to filter TreatmentAchievementDetails to delete.
     * @example
     * // Delete a few TreatmentAchievementDetails
     * const { count } = await prisma.treatmentAchievementDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentAchievementDetailDeleteManyArgs>(args?: SelectSubset<T, TreatmentAchievementDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentAchievementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentAchievementDetails
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentAchievementDetailUpdateManyArgs>(args: SelectSubset<T, TreatmentAchievementDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreatmentAchievementDetail.
     * @param {TreatmentAchievementDetailUpsertArgs} args - Arguments to update or create a TreatmentAchievementDetail.
     * @example
     * // Update or create a TreatmentAchievementDetail
     * const treatmentAchievementDetail = await prisma.treatmentAchievementDetail.upsert({
     *   create: {
     *     // ... data to create a TreatmentAchievementDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentAchievementDetail we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentAchievementDetailUpsertArgs>(args: SelectSubset<T, TreatmentAchievementDetailUpsertArgs<ExtArgs>>): Prisma__TreatmentAchievementDetailClient<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentAchievementDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailCountArgs} args - Arguments to filter TreatmentAchievementDetails to count.
     * @example
     * // Count the number of TreatmentAchievementDetails
     * const count = await prisma.treatmentAchievementDetail.count({
     *   where: {
     *     // ... the filter for the TreatmentAchievementDetails we want to count
     *   }
     * })
    **/
    count<T extends TreatmentAchievementDetailCountArgs>(
      args?: Subset<T, TreatmentAchievementDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentAchievementDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentAchievementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentAchievementDetailAggregateArgs>(args: Subset<T, TreatmentAchievementDetailAggregateArgs>): Prisma.PrismaPromise<GetTreatmentAchievementDetailAggregateType<T>>

    /**
     * Group by TreatmentAchievementDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAchievementDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentAchievementDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentAchievementDetailGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentAchievementDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentAchievementDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentAchievementDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentAchievementDetail model
   */
  readonly fields: TreatmentAchievementDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentAchievementDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentAchievementDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock<T extends ProductStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductStockDefaultArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TreatmentAchievement<T extends TreatmentAchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentAchievementDefaultArgs<ExtArgs>>): Prisma__TreatmentAchievementClient<$Result.GetResult<Prisma.$TreatmentAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TreatmentPlanDetail<T extends TreatmentPlanDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentPlanDetailDefaultArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock<T extends ProductStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductStockDefaultArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentAchievementDetail model
   */
  interface TreatmentAchievementDetailFieldRefs {
    readonly Id: FieldRef<"TreatmentAchievementDetail", 'Int'>
    readonly TreatmentAchievementId: FieldRef<"TreatmentAchievementDetail", 'Int'>
    readonly TreatmentPlanDetailId: FieldRef<"TreatmentAchievementDetail", 'Int'>
    readonly UsedProductStockId: FieldRef<"TreatmentAchievementDetail", 'Int'>
    readonly ProducedProductStockId: FieldRef<"TreatmentAchievementDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentAchievementDetail findUnique
   */
  export type TreatmentAchievementDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievementDetail to fetch.
     */
    where: TreatmentAchievementDetailWhereUniqueInput
  }

  /**
   * TreatmentAchievementDetail findUniqueOrThrow
   */
  export type TreatmentAchievementDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievementDetail to fetch.
     */
    where: TreatmentAchievementDetailWhereUniqueInput
  }

  /**
   * TreatmentAchievementDetail findFirst
   */
  export type TreatmentAchievementDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievementDetail to fetch.
     */
    where?: TreatmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievementDetails to fetch.
     */
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentAchievementDetails.
     */
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentAchievementDetails.
     */
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * TreatmentAchievementDetail findFirstOrThrow
   */
  export type TreatmentAchievementDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievementDetail to fetch.
     */
    where?: TreatmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievementDetails to fetch.
     */
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentAchievementDetails.
     */
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievementDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentAchievementDetails.
     */
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * TreatmentAchievementDetail findMany
   */
  export type TreatmentAchievementDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentAchievementDetails to fetch.
     */
    where?: TreatmentAchievementDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentAchievementDetails to fetch.
     */
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentAchievementDetails.
     */
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentAchievementDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentAchievementDetails.
     */
    skip?: number
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * TreatmentAchievementDetail create
   */
  export type TreatmentAchievementDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentAchievementDetail.
     */
    data: XOR<TreatmentAchievementDetailCreateInput, TreatmentAchievementDetailUncheckedCreateInput>
  }

  /**
   * TreatmentAchievementDetail createMany
   */
  export type TreatmentAchievementDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentAchievementDetails.
     */
    data: TreatmentAchievementDetailCreateManyInput | TreatmentAchievementDetailCreateManyInput[]
  }

  /**
   * TreatmentAchievementDetail update
   */
  export type TreatmentAchievementDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentAchievementDetail.
     */
    data: XOR<TreatmentAchievementDetailUpdateInput, TreatmentAchievementDetailUncheckedUpdateInput>
    /**
     * Choose, which TreatmentAchievementDetail to update.
     */
    where: TreatmentAchievementDetailWhereUniqueInput
  }

  /**
   * TreatmentAchievementDetail updateMany
   */
  export type TreatmentAchievementDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentAchievementDetails.
     */
    data: XOR<TreatmentAchievementDetailUpdateManyMutationInput, TreatmentAchievementDetailUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentAchievementDetails to update
     */
    where?: TreatmentAchievementDetailWhereInput
    /**
     * Limit how many TreatmentAchievementDetails to update.
     */
    limit?: number
  }

  /**
   * TreatmentAchievementDetail upsert
   */
  export type TreatmentAchievementDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentAchievementDetail to update in case it exists.
     */
    where: TreatmentAchievementDetailWhereUniqueInput
    /**
     * In case the TreatmentAchievementDetail found by the `where` argument doesn't exist, create a new TreatmentAchievementDetail with this data.
     */
    create: XOR<TreatmentAchievementDetailCreateInput, TreatmentAchievementDetailUncheckedCreateInput>
    /**
     * In case the TreatmentAchievementDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentAchievementDetailUpdateInput, TreatmentAchievementDetailUncheckedUpdateInput>
  }

  /**
   * TreatmentAchievementDetail delete
   */
  export type TreatmentAchievementDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    /**
     * Filter which TreatmentAchievementDetail to delete.
     */
    where: TreatmentAchievementDetailWhereUniqueInput
  }

  /**
   * TreatmentAchievementDetail deleteMany
   */
  export type TreatmentAchievementDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentAchievementDetails to delete
     */
    where?: TreatmentAchievementDetailWhereInput
    /**
     * Limit how many TreatmentAchievementDetails to delete.
     */
    limit?: number
  }

  /**
   * TreatmentAchievementDetail without action
   */
  export type TreatmentAchievementDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentPlan
   */

  export type AggregateTreatmentPlan = {
    _count: TreatmentPlanCountAggregateOutputType | null
    _avg: TreatmentPlanAvgAggregateOutputType | null
    _sum: TreatmentPlanSumAggregateOutputType | null
    _min: TreatmentPlanMinAggregateOutputType | null
    _max: TreatmentPlanMaxAggregateOutputType | null
  }

  export type TreatmentPlanAvgAggregateOutputType = {
    Id: number | null
  }

  export type TreatmentPlanSumAggregateOutputType = {
    Id: number | null
  }

  export type TreatmentPlanMinAggregateOutputType = {
    Id: number | null
  }

  export type TreatmentPlanMaxAggregateOutputType = {
    Id: number | null
  }

  export type TreatmentPlanCountAggregateOutputType = {
    Id: number
    _all: number
  }


  export type TreatmentPlanAvgAggregateInputType = {
    Id?: true
  }

  export type TreatmentPlanSumAggregateInputType = {
    Id?: true
  }

  export type TreatmentPlanMinAggregateInputType = {
    Id?: true
  }

  export type TreatmentPlanMaxAggregateInputType = {
    Id?: true
  }

  export type TreatmentPlanCountAggregateInputType = {
    Id?: true
    _all?: true
  }

  export type TreatmentPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentPlan to aggregate.
     */
    where?: TreatmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlans to fetch.
     */
    orderBy?: TreatmentPlanOrderByWithRelationInput | TreatmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentPlans
    **/
    _count?: true | TreatmentPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentPlanMaxAggregateInputType
  }

  export type GetTreatmentPlanAggregateType<T extends TreatmentPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentPlan[P]>
      : GetScalarType<T[P], AggregateTreatmentPlan[P]>
  }




  export type TreatmentPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentPlanWhereInput
    orderBy?: TreatmentPlanOrderByWithAggregationInput | TreatmentPlanOrderByWithAggregationInput[]
    by: TreatmentPlanScalarFieldEnum[] | TreatmentPlanScalarFieldEnum
    having?: TreatmentPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentPlanCountAggregateInputType | true
    _avg?: TreatmentPlanAvgAggregateInputType
    _sum?: TreatmentPlanSumAggregateInputType
    _min?: TreatmentPlanMinAggregateInputType
    _max?: TreatmentPlanMaxAggregateInputType
  }

  export type TreatmentPlanGroupByOutputType = {
    Id: number
    _count: TreatmentPlanCountAggregateOutputType | null
    _avg: TreatmentPlanAvgAggregateOutputType | null
    _sum: TreatmentPlanSumAggregateOutputType | null
    _min: TreatmentPlanMinAggregateOutputType | null
    _max: TreatmentPlanMaxAggregateOutputType | null
  }

  type GetTreatmentPlanGroupByPayload<T extends TreatmentPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentPlanGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    TreatmentPlanDetail?: boolean | TreatmentPlan$TreatmentPlanDetailArgs<ExtArgs>
    _count?: boolean | TreatmentPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentPlan"]>



  export type TreatmentPlanSelectScalar = {
    Id?: boolean
  }

  export type TreatmentPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id", ExtArgs["result"]["treatmentPlan"]>
  export type TreatmentPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TreatmentPlanDetail?: boolean | TreatmentPlan$TreatmentPlanDetailArgs<ExtArgs>
    _count?: boolean | TreatmentPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TreatmentPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentPlan"
    objects: {
      TreatmentPlanDetail: Prisma.$TreatmentPlanDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
    }, ExtArgs["result"]["treatmentPlan"]>
    composites: {}
  }

  type TreatmentPlanGetPayload<S extends boolean | null | undefined | TreatmentPlanDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPlanPayload, S>

  type TreatmentPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentPlanCountAggregateInputType | true
    }

  export interface TreatmentPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentPlan'], meta: { name: 'TreatmentPlan' } }
    /**
     * Find zero or one TreatmentPlan that matches the filter.
     * @param {TreatmentPlanFindUniqueArgs} args - Arguments to find a TreatmentPlan
     * @example
     * // Get one TreatmentPlan
     * const treatmentPlan = await prisma.treatmentPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentPlanFindUniqueArgs>(args: SelectSubset<T, TreatmentPlanFindUniqueArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentPlanFindUniqueOrThrowArgs} args - Arguments to find a TreatmentPlan
     * @example
     * // Get one TreatmentPlan
     * const treatmentPlan = await prisma.treatmentPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanFindFirstArgs} args - Arguments to find a TreatmentPlan
     * @example
     * // Get one TreatmentPlan
     * const treatmentPlan = await prisma.treatmentPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentPlanFindFirstArgs>(args?: SelectSubset<T, TreatmentPlanFindFirstArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanFindFirstOrThrowArgs} args - Arguments to find a TreatmentPlan
     * @example
     * // Get one TreatmentPlan
     * const treatmentPlan = await prisma.treatmentPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentPlans
     * const treatmentPlans = await prisma.treatmentPlan.findMany()
     * 
     * // Get first 10 TreatmentPlans
     * const treatmentPlans = await prisma.treatmentPlan.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const treatmentPlanWithIdOnly = await prisma.treatmentPlan.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TreatmentPlanFindManyArgs>(args?: SelectSubset<T, TreatmentPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentPlan.
     * @param {TreatmentPlanCreateArgs} args - Arguments to create a TreatmentPlan.
     * @example
     * // Create one TreatmentPlan
     * const TreatmentPlan = await prisma.treatmentPlan.create({
     *   data: {
     *     // ... data to create a TreatmentPlan
     *   }
     * })
     * 
     */
    create<T extends TreatmentPlanCreateArgs>(args: SelectSubset<T, TreatmentPlanCreateArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentPlans.
     * @param {TreatmentPlanCreateManyArgs} args - Arguments to create many TreatmentPlans.
     * @example
     * // Create many TreatmentPlans
     * const treatmentPlan = await prisma.treatmentPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentPlanCreateManyArgs>(args?: SelectSubset<T, TreatmentPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TreatmentPlan.
     * @param {TreatmentPlanDeleteArgs} args - Arguments to delete one TreatmentPlan.
     * @example
     * // Delete one TreatmentPlan
     * const TreatmentPlan = await prisma.treatmentPlan.delete({
     *   where: {
     *     // ... filter to delete one TreatmentPlan
     *   }
     * })
     * 
     */
    delete<T extends TreatmentPlanDeleteArgs>(args: SelectSubset<T, TreatmentPlanDeleteArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentPlan.
     * @param {TreatmentPlanUpdateArgs} args - Arguments to update one TreatmentPlan.
     * @example
     * // Update one TreatmentPlan
     * const treatmentPlan = await prisma.treatmentPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentPlanUpdateArgs>(args: SelectSubset<T, TreatmentPlanUpdateArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentPlans.
     * @param {TreatmentPlanDeleteManyArgs} args - Arguments to filter TreatmentPlans to delete.
     * @example
     * // Delete a few TreatmentPlans
     * const { count } = await prisma.treatmentPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentPlanDeleteManyArgs>(args?: SelectSubset<T, TreatmentPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentPlans
     * const treatmentPlan = await prisma.treatmentPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentPlanUpdateManyArgs>(args: SelectSubset<T, TreatmentPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreatmentPlan.
     * @param {TreatmentPlanUpsertArgs} args - Arguments to update or create a TreatmentPlan.
     * @example
     * // Update or create a TreatmentPlan
     * const treatmentPlan = await prisma.treatmentPlan.upsert({
     *   create: {
     *     // ... data to create a TreatmentPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentPlan we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentPlanUpsertArgs>(args: SelectSubset<T, TreatmentPlanUpsertArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanCountArgs} args - Arguments to filter TreatmentPlans to count.
     * @example
     * // Count the number of TreatmentPlans
     * const count = await prisma.treatmentPlan.count({
     *   where: {
     *     // ... the filter for the TreatmentPlans we want to count
     *   }
     * })
    **/
    count<T extends TreatmentPlanCountArgs>(
      args?: Subset<T, TreatmentPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentPlanAggregateArgs>(args: Subset<T, TreatmentPlanAggregateArgs>): Prisma.PrismaPromise<GetTreatmentPlanAggregateType<T>>

    /**
     * Group by TreatmentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentPlanGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentPlan model
   */
  readonly fields: TreatmentPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TreatmentPlanDetail<T extends TreatmentPlan$TreatmentPlanDetailArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentPlan$TreatmentPlanDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentPlan model
   */
  interface TreatmentPlanFieldRefs {
    readonly Id: FieldRef<"TreatmentPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentPlan findUnique
   */
  export type TreatmentPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlan to fetch.
     */
    where: TreatmentPlanWhereUniqueInput
  }

  /**
   * TreatmentPlan findUniqueOrThrow
   */
  export type TreatmentPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlan to fetch.
     */
    where: TreatmentPlanWhereUniqueInput
  }

  /**
   * TreatmentPlan findFirst
   */
  export type TreatmentPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlan to fetch.
     */
    where?: TreatmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlans to fetch.
     */
    orderBy?: TreatmentPlanOrderByWithRelationInput | TreatmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentPlans.
     */
    cursor?: TreatmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentPlans.
     */
    distinct?: TreatmentPlanScalarFieldEnum | TreatmentPlanScalarFieldEnum[]
  }

  /**
   * TreatmentPlan findFirstOrThrow
   */
  export type TreatmentPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlan to fetch.
     */
    where?: TreatmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlans to fetch.
     */
    orderBy?: TreatmentPlanOrderByWithRelationInput | TreatmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentPlans.
     */
    cursor?: TreatmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentPlans.
     */
    distinct?: TreatmentPlanScalarFieldEnum | TreatmentPlanScalarFieldEnum[]
  }

  /**
   * TreatmentPlan findMany
   */
  export type TreatmentPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlans to fetch.
     */
    where?: TreatmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlans to fetch.
     */
    orderBy?: TreatmentPlanOrderByWithRelationInput | TreatmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentPlans.
     */
    cursor?: TreatmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlans.
     */
    skip?: number
    distinct?: TreatmentPlanScalarFieldEnum | TreatmentPlanScalarFieldEnum[]
  }

  /**
   * TreatmentPlan create
   */
  export type TreatmentPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentPlan.
     */
    data?: XOR<TreatmentPlanCreateInput, TreatmentPlanUncheckedCreateInput>
  }

  /**
   * TreatmentPlan createMany
   */
  export type TreatmentPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentPlans.
     */
    data: TreatmentPlanCreateManyInput | TreatmentPlanCreateManyInput[]
  }

  /**
   * TreatmentPlan update
   */
  export type TreatmentPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentPlan.
     */
    data: XOR<TreatmentPlanUpdateInput, TreatmentPlanUncheckedUpdateInput>
    /**
     * Choose, which TreatmentPlan to update.
     */
    where: TreatmentPlanWhereUniqueInput
  }

  /**
   * TreatmentPlan updateMany
   */
  export type TreatmentPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentPlans.
     */
    data: XOR<TreatmentPlanUpdateManyMutationInput, TreatmentPlanUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentPlans to update
     */
    where?: TreatmentPlanWhereInput
    /**
     * Limit how many TreatmentPlans to update.
     */
    limit?: number
  }

  /**
   * TreatmentPlan upsert
   */
  export type TreatmentPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentPlan to update in case it exists.
     */
    where: TreatmentPlanWhereUniqueInput
    /**
     * In case the TreatmentPlan found by the `where` argument doesn't exist, create a new TreatmentPlan with this data.
     */
    create: XOR<TreatmentPlanCreateInput, TreatmentPlanUncheckedCreateInput>
    /**
     * In case the TreatmentPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentPlanUpdateInput, TreatmentPlanUncheckedUpdateInput>
  }

  /**
   * TreatmentPlan delete
   */
  export type TreatmentPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
    /**
     * Filter which TreatmentPlan to delete.
     */
    where: TreatmentPlanWhereUniqueInput
  }

  /**
   * TreatmentPlan deleteMany
   */
  export type TreatmentPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentPlans to delete
     */
    where?: TreatmentPlanWhereInput
    /**
     * Limit how many TreatmentPlans to delete.
     */
    limit?: number
  }

  /**
   * TreatmentPlan.TreatmentPlanDetail
   */
  export type TreatmentPlan$TreatmentPlanDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    where?: TreatmentPlanDetailWhereInput
    orderBy?: TreatmentPlanDetailOrderByWithRelationInput | TreatmentPlanDetailOrderByWithRelationInput[]
    cursor?: TreatmentPlanDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentPlanDetailScalarFieldEnum | TreatmentPlanDetailScalarFieldEnum[]
  }

  /**
   * TreatmentPlan without action
   */
  export type TreatmentPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlan
     */
    select?: TreatmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlan
     */
    omit?: TreatmentPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentPlanDetail
   */

  export type AggregateTreatmentPlanDetail = {
    _count: TreatmentPlanDetailCountAggregateOutputType | null
    _avg: TreatmentPlanDetailAvgAggregateOutputType | null
    _sum: TreatmentPlanDetailSumAggregateOutputType | null
    _min: TreatmentPlanDetailMinAggregateOutputType | null
    _max: TreatmentPlanDetailMaxAggregateOutputType | null
  }

  export type TreatmentPlanDetailAvgAggregateOutputType = {
    Id: number | null
    TreatmentPlanId: number | null
    ProductStockId: number | null
    Quantity: number | null
  }

  export type TreatmentPlanDetailSumAggregateOutputType = {
    Id: number | null
    TreatmentPlanId: number | null
    ProductStockId: number | null
    Quantity: number | null
  }

  export type TreatmentPlanDetailMinAggregateOutputType = {
    Id: number | null
    TreatmentPlanId: number | null
    ProductStockId: number | null
    Quantity: number | null
  }

  export type TreatmentPlanDetailMaxAggregateOutputType = {
    Id: number | null
    TreatmentPlanId: number | null
    ProductStockId: number | null
    Quantity: number | null
  }

  export type TreatmentPlanDetailCountAggregateOutputType = {
    Id: number
    TreatmentPlanId: number
    ProductStockId: number
    Quantity: number
    _all: number
  }


  export type TreatmentPlanDetailAvgAggregateInputType = {
    Id?: true
    TreatmentPlanId?: true
    ProductStockId?: true
    Quantity?: true
  }

  export type TreatmentPlanDetailSumAggregateInputType = {
    Id?: true
    TreatmentPlanId?: true
    ProductStockId?: true
    Quantity?: true
  }

  export type TreatmentPlanDetailMinAggregateInputType = {
    Id?: true
    TreatmentPlanId?: true
    ProductStockId?: true
    Quantity?: true
  }

  export type TreatmentPlanDetailMaxAggregateInputType = {
    Id?: true
    TreatmentPlanId?: true
    ProductStockId?: true
    Quantity?: true
  }

  export type TreatmentPlanDetailCountAggregateInputType = {
    Id?: true
    TreatmentPlanId?: true
    ProductStockId?: true
    Quantity?: true
    _all?: true
  }

  export type TreatmentPlanDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentPlanDetail to aggregate.
     */
    where?: TreatmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlanDetails to fetch.
     */
    orderBy?: TreatmentPlanDetailOrderByWithRelationInput | TreatmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentPlanDetails
    **/
    _count?: true | TreatmentPlanDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentPlanDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentPlanDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentPlanDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentPlanDetailMaxAggregateInputType
  }

  export type GetTreatmentPlanDetailAggregateType<T extends TreatmentPlanDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentPlanDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentPlanDetail[P]>
      : GetScalarType<T[P], AggregateTreatmentPlanDetail[P]>
  }




  export type TreatmentPlanDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentPlanDetailWhereInput
    orderBy?: TreatmentPlanDetailOrderByWithAggregationInput | TreatmentPlanDetailOrderByWithAggregationInput[]
    by: TreatmentPlanDetailScalarFieldEnum[] | TreatmentPlanDetailScalarFieldEnum
    having?: TreatmentPlanDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentPlanDetailCountAggregateInputType | true
    _avg?: TreatmentPlanDetailAvgAggregateInputType
    _sum?: TreatmentPlanDetailSumAggregateInputType
    _min?: TreatmentPlanDetailMinAggregateInputType
    _max?: TreatmentPlanDetailMaxAggregateInputType
  }

  export type TreatmentPlanDetailGroupByOutputType = {
    Id: number
    TreatmentPlanId: number
    ProductStockId: number
    Quantity: number
    _count: TreatmentPlanDetailCountAggregateOutputType | null
    _avg: TreatmentPlanDetailAvgAggregateOutputType | null
    _sum: TreatmentPlanDetailSumAggregateOutputType | null
    _min: TreatmentPlanDetailMinAggregateOutputType | null
    _max: TreatmentPlanDetailMaxAggregateOutputType | null
  }

  type GetTreatmentPlanDetailGroupByPayload<T extends TreatmentPlanDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentPlanDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentPlanDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentPlanDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentPlanDetailGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentPlanDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    TreatmentPlanId?: boolean
    ProductStockId?: boolean
    Quantity?: boolean
    TreatmentAchievementDetail?: boolean | TreatmentPlanDetail$TreatmentAchievementDetailArgs<ExtArgs>
    ProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    TreatmentPlan?: boolean | TreatmentPlanDefaultArgs<ExtArgs>
    _count?: boolean | TreatmentPlanDetailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentPlanDetail"]>



  export type TreatmentPlanDetailSelectScalar = {
    Id?: boolean
    TreatmentPlanId?: boolean
    ProductStockId?: boolean
    Quantity?: boolean
  }

  export type TreatmentPlanDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "TreatmentPlanId" | "ProductStockId" | "Quantity", ExtArgs["result"]["treatmentPlanDetail"]>
  export type TreatmentPlanDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TreatmentAchievementDetail?: boolean | TreatmentPlanDetail$TreatmentAchievementDetailArgs<ExtArgs>
    ProductStock?: boolean | ProductStockDefaultArgs<ExtArgs>
    TreatmentPlan?: boolean | TreatmentPlanDefaultArgs<ExtArgs>
    _count?: boolean | TreatmentPlanDetailCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TreatmentPlanDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentPlanDetail"
    objects: {
      TreatmentAchievementDetail: Prisma.$TreatmentAchievementDetailPayload<ExtArgs>[]
      ProductStock: Prisma.$ProductStockPayload<ExtArgs>
      TreatmentPlan: Prisma.$TreatmentPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      TreatmentPlanId: number
      ProductStockId: number
      Quantity: number
    }, ExtArgs["result"]["treatmentPlanDetail"]>
    composites: {}
  }

  type TreatmentPlanDetailGetPayload<S extends boolean | null | undefined | TreatmentPlanDetailDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPlanDetailPayload, S>

  type TreatmentPlanDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentPlanDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentPlanDetailCountAggregateInputType | true
    }

  export interface TreatmentPlanDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentPlanDetail'], meta: { name: 'TreatmentPlanDetail' } }
    /**
     * Find zero or one TreatmentPlanDetail that matches the filter.
     * @param {TreatmentPlanDetailFindUniqueArgs} args - Arguments to find a TreatmentPlanDetail
     * @example
     * // Get one TreatmentPlanDetail
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentPlanDetailFindUniqueArgs>(args: SelectSubset<T, TreatmentPlanDetailFindUniqueArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentPlanDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentPlanDetailFindUniqueOrThrowArgs} args - Arguments to find a TreatmentPlanDetail
     * @example
     * // Get one TreatmentPlanDetail
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentPlanDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentPlanDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentPlanDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailFindFirstArgs} args - Arguments to find a TreatmentPlanDetail
     * @example
     * // Get one TreatmentPlanDetail
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentPlanDetailFindFirstArgs>(args?: SelectSubset<T, TreatmentPlanDetailFindFirstArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentPlanDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailFindFirstOrThrowArgs} args - Arguments to find a TreatmentPlanDetail
     * @example
     * // Get one TreatmentPlanDetail
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentPlanDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentPlanDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentPlanDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentPlanDetails
     * const treatmentPlanDetails = await prisma.treatmentPlanDetail.findMany()
     * 
     * // Get first 10 TreatmentPlanDetails
     * const treatmentPlanDetails = await prisma.treatmentPlanDetail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const treatmentPlanDetailWithIdOnly = await prisma.treatmentPlanDetail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TreatmentPlanDetailFindManyArgs>(args?: SelectSubset<T, TreatmentPlanDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentPlanDetail.
     * @param {TreatmentPlanDetailCreateArgs} args - Arguments to create a TreatmentPlanDetail.
     * @example
     * // Create one TreatmentPlanDetail
     * const TreatmentPlanDetail = await prisma.treatmentPlanDetail.create({
     *   data: {
     *     // ... data to create a TreatmentPlanDetail
     *   }
     * })
     * 
     */
    create<T extends TreatmentPlanDetailCreateArgs>(args: SelectSubset<T, TreatmentPlanDetailCreateArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentPlanDetails.
     * @param {TreatmentPlanDetailCreateManyArgs} args - Arguments to create many TreatmentPlanDetails.
     * @example
     * // Create many TreatmentPlanDetails
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentPlanDetailCreateManyArgs>(args?: SelectSubset<T, TreatmentPlanDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TreatmentPlanDetail.
     * @param {TreatmentPlanDetailDeleteArgs} args - Arguments to delete one TreatmentPlanDetail.
     * @example
     * // Delete one TreatmentPlanDetail
     * const TreatmentPlanDetail = await prisma.treatmentPlanDetail.delete({
     *   where: {
     *     // ... filter to delete one TreatmentPlanDetail
     *   }
     * })
     * 
     */
    delete<T extends TreatmentPlanDetailDeleteArgs>(args: SelectSubset<T, TreatmentPlanDetailDeleteArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentPlanDetail.
     * @param {TreatmentPlanDetailUpdateArgs} args - Arguments to update one TreatmentPlanDetail.
     * @example
     * // Update one TreatmentPlanDetail
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentPlanDetailUpdateArgs>(args: SelectSubset<T, TreatmentPlanDetailUpdateArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentPlanDetails.
     * @param {TreatmentPlanDetailDeleteManyArgs} args - Arguments to filter TreatmentPlanDetails to delete.
     * @example
     * // Delete a few TreatmentPlanDetails
     * const { count } = await prisma.treatmentPlanDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentPlanDetailDeleteManyArgs>(args?: SelectSubset<T, TreatmentPlanDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentPlanDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentPlanDetails
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentPlanDetailUpdateManyArgs>(args: SelectSubset<T, TreatmentPlanDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreatmentPlanDetail.
     * @param {TreatmentPlanDetailUpsertArgs} args - Arguments to update or create a TreatmentPlanDetail.
     * @example
     * // Update or create a TreatmentPlanDetail
     * const treatmentPlanDetail = await prisma.treatmentPlanDetail.upsert({
     *   create: {
     *     // ... data to create a TreatmentPlanDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentPlanDetail we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentPlanDetailUpsertArgs>(args: SelectSubset<T, TreatmentPlanDetailUpsertArgs<ExtArgs>>): Prisma__TreatmentPlanDetailClient<$Result.GetResult<Prisma.$TreatmentPlanDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentPlanDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailCountArgs} args - Arguments to filter TreatmentPlanDetails to count.
     * @example
     * // Count the number of TreatmentPlanDetails
     * const count = await prisma.treatmentPlanDetail.count({
     *   where: {
     *     // ... the filter for the TreatmentPlanDetails we want to count
     *   }
     * })
    **/
    count<T extends TreatmentPlanDetailCountArgs>(
      args?: Subset<T, TreatmentPlanDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentPlanDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentPlanDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentPlanDetailAggregateArgs>(args: Subset<T, TreatmentPlanDetailAggregateArgs>): Prisma.PrismaPromise<GetTreatmentPlanDetailAggregateType<T>>

    /**
     * Group by TreatmentPlanDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentPlanDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentPlanDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentPlanDetailGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentPlanDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentPlanDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentPlanDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentPlanDetail model
   */
  readonly fields: TreatmentPlanDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentPlanDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentPlanDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TreatmentAchievementDetail<T extends TreatmentPlanDetail$TreatmentAchievementDetailArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentPlanDetail$TreatmentAchievementDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentAchievementDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductStock<T extends ProductStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductStockDefaultArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TreatmentPlan<T extends TreatmentPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentPlanDefaultArgs<ExtArgs>>): Prisma__TreatmentPlanClient<$Result.GetResult<Prisma.$TreatmentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentPlanDetail model
   */
  interface TreatmentPlanDetailFieldRefs {
    readonly Id: FieldRef<"TreatmentPlanDetail", 'Int'>
    readonly TreatmentPlanId: FieldRef<"TreatmentPlanDetail", 'Int'>
    readonly ProductStockId: FieldRef<"TreatmentPlanDetail", 'Int'>
    readonly Quantity: FieldRef<"TreatmentPlanDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentPlanDetail findUnique
   */
  export type TreatmentPlanDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlanDetail to fetch.
     */
    where: TreatmentPlanDetailWhereUniqueInput
  }

  /**
   * TreatmentPlanDetail findUniqueOrThrow
   */
  export type TreatmentPlanDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlanDetail to fetch.
     */
    where: TreatmentPlanDetailWhereUniqueInput
  }

  /**
   * TreatmentPlanDetail findFirst
   */
  export type TreatmentPlanDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlanDetail to fetch.
     */
    where?: TreatmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlanDetails to fetch.
     */
    orderBy?: TreatmentPlanDetailOrderByWithRelationInput | TreatmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentPlanDetails.
     */
    cursor?: TreatmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentPlanDetails.
     */
    distinct?: TreatmentPlanDetailScalarFieldEnum | TreatmentPlanDetailScalarFieldEnum[]
  }

  /**
   * TreatmentPlanDetail findFirstOrThrow
   */
  export type TreatmentPlanDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlanDetail to fetch.
     */
    where?: TreatmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlanDetails to fetch.
     */
    orderBy?: TreatmentPlanDetailOrderByWithRelationInput | TreatmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentPlanDetails.
     */
    cursor?: TreatmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlanDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentPlanDetails.
     */
    distinct?: TreatmentPlanDetailScalarFieldEnum | TreatmentPlanDetailScalarFieldEnum[]
  }

  /**
   * TreatmentPlanDetail findMany
   */
  export type TreatmentPlanDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentPlanDetails to fetch.
     */
    where?: TreatmentPlanDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentPlanDetails to fetch.
     */
    orderBy?: TreatmentPlanDetailOrderByWithRelationInput | TreatmentPlanDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentPlanDetails.
     */
    cursor?: TreatmentPlanDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentPlanDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentPlanDetails.
     */
    skip?: number
    distinct?: TreatmentPlanDetailScalarFieldEnum | TreatmentPlanDetailScalarFieldEnum[]
  }

  /**
   * TreatmentPlanDetail create
   */
  export type TreatmentPlanDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentPlanDetail.
     */
    data: XOR<TreatmentPlanDetailCreateInput, TreatmentPlanDetailUncheckedCreateInput>
  }

  /**
   * TreatmentPlanDetail createMany
   */
  export type TreatmentPlanDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentPlanDetails.
     */
    data: TreatmentPlanDetailCreateManyInput | TreatmentPlanDetailCreateManyInput[]
  }

  /**
   * TreatmentPlanDetail update
   */
  export type TreatmentPlanDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentPlanDetail.
     */
    data: XOR<TreatmentPlanDetailUpdateInput, TreatmentPlanDetailUncheckedUpdateInput>
    /**
     * Choose, which TreatmentPlanDetail to update.
     */
    where: TreatmentPlanDetailWhereUniqueInput
  }

  /**
   * TreatmentPlanDetail updateMany
   */
  export type TreatmentPlanDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentPlanDetails.
     */
    data: XOR<TreatmentPlanDetailUpdateManyMutationInput, TreatmentPlanDetailUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentPlanDetails to update
     */
    where?: TreatmentPlanDetailWhereInput
    /**
     * Limit how many TreatmentPlanDetails to update.
     */
    limit?: number
  }

  /**
   * TreatmentPlanDetail upsert
   */
  export type TreatmentPlanDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentPlanDetail to update in case it exists.
     */
    where: TreatmentPlanDetailWhereUniqueInput
    /**
     * In case the TreatmentPlanDetail found by the `where` argument doesn't exist, create a new TreatmentPlanDetail with this data.
     */
    create: XOR<TreatmentPlanDetailCreateInput, TreatmentPlanDetailUncheckedCreateInput>
    /**
     * In case the TreatmentPlanDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentPlanDetailUpdateInput, TreatmentPlanDetailUncheckedUpdateInput>
  }

  /**
   * TreatmentPlanDetail delete
   */
  export type TreatmentPlanDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
    /**
     * Filter which TreatmentPlanDetail to delete.
     */
    where: TreatmentPlanDetailWhereUniqueInput
  }

  /**
   * TreatmentPlanDetail deleteMany
   */
  export type TreatmentPlanDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentPlanDetails to delete
     */
    where?: TreatmentPlanDetailWhereInput
    /**
     * Limit how many TreatmentPlanDetails to delete.
     */
    limit?: number
  }

  /**
   * TreatmentPlanDetail.TreatmentAchievementDetail
   */
  export type TreatmentPlanDetail$TreatmentAchievementDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentAchievementDetail
     */
    select?: TreatmentAchievementDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentAchievementDetail
     */
    omit?: TreatmentAchievementDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentAchievementDetailInclude<ExtArgs> | null
    where?: TreatmentAchievementDetailWhereInput
    orderBy?: TreatmentAchievementDetailOrderByWithRelationInput | TreatmentAchievementDetailOrderByWithRelationInput[]
    cursor?: TreatmentAchievementDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentAchievementDetailScalarFieldEnum | TreatmentAchievementDetailScalarFieldEnum[]
  }

  /**
   * TreatmentPlanDetail without action
   */
  export type TreatmentPlanDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentPlanDetail
     */
    select?: TreatmentPlanDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentPlanDetail
     */
    omit?: TreatmentPlanDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentPlanDetailInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    Id: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    Id: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    Id: number | null
    Name: string | null
  }

  export type WarehouseMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
  }

  export type WarehouseCountAggregateOutputType = {
    Id: number
    Name: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    Id?: true
  }

  export type WarehouseSumAggregateInputType = {
    Id?: true
  }

  export type WarehouseMinAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type WarehouseMaxAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type WarehouseCountAggregateInputType = {
    Id?: true
    Name?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    Id: number
    Name: string
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    ProductStock?: boolean | Warehouse$ProductStockArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>



  export type WarehouseSelectScalar = {
    Id?: boolean
    Name?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductStock?: boolean | Warehouse$ProductStockArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      ProductStock: Prisma.$ProductStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Name: string
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductStock<T extends Warehouse$ProductStockArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$ProductStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly Id: FieldRef<"Warehouse", 'Int'>
    readonly Name: FieldRef<"Warehouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.ProductStock
   */
  export type Warehouse$ProductStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Address: 'Address',
    Email: 'Email'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductStockScalarFieldEnum: {
    Id: 'Id',
    ProductId: 'ProductId',
    WarehouseId: 'WarehouseId',
    Used: 'Used'
  };

  export type ProductStockScalarFieldEnum = (typeof ProductStockScalarFieldEnum)[keyof typeof ProductStockScalarFieldEnum]


  export const ReceivingAchievementScalarFieldEnum: {
    Id: 'Id',
    ReceivedAt: 'ReceivedAt',
    EmployeeId: 'EmployeeId'
  };

  export type ReceivingAchievementScalarFieldEnum = (typeof ReceivingAchievementScalarFieldEnum)[keyof typeof ReceivingAchievementScalarFieldEnum]


  export const ReceivingAchievementDetailScalarFieldEnum: {
    Id: 'Id',
    ReceivingAchievementId: 'ReceivingAchievementId',
    ProductStockId: 'ProductStockId'
  };

  export type ReceivingAchievementDetailScalarFieldEnum = (typeof ReceivingAchievementDetailScalarFieldEnum)[keyof typeof ReceivingAchievementDetailScalarFieldEnum]


  export const ShipmentAchievementScalarFieldEnum: {
    Id: 'Id',
    ShippedAt: 'ShippedAt',
    EmployeeId: 'EmployeeId'
  };

  export type ShipmentAchievementScalarFieldEnum = (typeof ShipmentAchievementScalarFieldEnum)[keyof typeof ShipmentAchievementScalarFieldEnum]


  export const ShipmentAchievementDetailScalarFieldEnum: {
    Id: 'Id',
    ShipmentAchievementId: 'ShipmentAchievementId',
    ProductStockId: 'ProductStockId',
    ShipmentPlanDetailId: 'ShipmentPlanDetailId'
  };

  export type ShipmentAchievementDetailScalarFieldEnum = (typeof ShipmentAchievementDetailScalarFieldEnum)[keyof typeof ShipmentAchievementDetailScalarFieldEnum]


  export const ShipmentPlanScalarFieldEnum: {
    Id: 'Id',
    CustomerId: 'CustomerId'
  };

  export type ShipmentPlanScalarFieldEnum = (typeof ShipmentPlanScalarFieldEnum)[keyof typeof ShipmentPlanScalarFieldEnum]


  export const ShipmentPlanDetailScalarFieldEnum: {
    Id: 'Id',
    ShipmentPlanId: 'ShipmentPlanId',
    ProductId: 'ProductId',
    Quantity: 'Quantity'
  };

  export type ShipmentPlanDetailScalarFieldEnum = (typeof ShipmentPlanDetailScalarFieldEnum)[keyof typeof ShipmentPlanDetailScalarFieldEnum]


  export const TreatmentAchievementScalarFieldEnum: {
    Id: 'Id',
    TreatedAt: 'TreatedAt',
    EmployeeId: 'EmployeeId'
  };

  export type TreatmentAchievementScalarFieldEnum = (typeof TreatmentAchievementScalarFieldEnum)[keyof typeof TreatmentAchievementScalarFieldEnum]


  export const TreatmentAchievementDetailScalarFieldEnum: {
    Id: 'Id',
    TreatmentAchievementId: 'TreatmentAchievementId',
    TreatmentPlanDetailId: 'TreatmentPlanDetailId',
    UsedProductStockId: 'UsedProductStockId',
    ProducedProductStockId: 'ProducedProductStockId'
  };

  export type TreatmentAchievementDetailScalarFieldEnum = (typeof TreatmentAchievementDetailScalarFieldEnum)[keyof typeof TreatmentAchievementDetailScalarFieldEnum]


  export const TreatmentPlanScalarFieldEnum: {
    Id: 'Id'
  };

  export type TreatmentPlanScalarFieldEnum = (typeof TreatmentPlanScalarFieldEnum)[keyof typeof TreatmentPlanScalarFieldEnum]


  export const TreatmentPlanDetailScalarFieldEnum: {
    Id: 'Id',
    TreatmentPlanId: 'TreatmentPlanId',
    ProductStockId: 'ProductStockId',
    Quantity: 'Quantity'
  };

  export type TreatmentPlanDetailScalarFieldEnum = (typeof TreatmentPlanDetailScalarFieldEnum)[keyof typeof TreatmentPlanDetailScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    Id?: IntFilter<"Customer"> | number
    Name?: StringFilter<"Customer"> | string
    Address?: StringFilter<"Customer"> | string
    Email?: StringFilter<"Customer"> | string
    ShipmentPlan?: ShipmentPlanListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
    Email?: SortOrder
    ShipmentPlan?: ShipmentPlanOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    Name?: StringFilter<"Customer"> | string
    Address?: StringFilter<"Customer"> | string
    ShipmentPlan?: ShipmentPlanListRelationFilter
  }, "Id" | "Email">

  export type CustomerOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
    Email?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Customer"> | number
    Name?: StringWithAggregatesFilter<"Customer"> | string
    Address?: StringWithAggregatesFilter<"Customer"> | string
    Email?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    Id?: IntFilter<"Employee"> | number
    Name?: StringFilter<"Employee"> | string
    ReceivingAchievement?: ReceivingAchievementListRelationFilter
    ShipmentAchievement?: ShipmentAchievementListRelationFilter
    TreatmentAchievement?: TreatmentAchievementListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ReceivingAchievement?: ReceivingAchievementOrderByRelationAggregateInput
    ShipmentAchievement?: ShipmentAchievementOrderByRelationAggregateInput
    TreatmentAchievement?: TreatmentAchievementOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    Name?: StringFilter<"Employee"> | string
    ReceivingAchievement?: ReceivingAchievementListRelationFilter
    ShipmentAchievement?: ShipmentAchievementListRelationFilter
    TreatmentAchievement?: TreatmentAchievementListRelationFilter
  }, "Id">

  export type EmployeeOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Employee"> | number
    Name?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Id?: IntFilter<"Product"> | number
    Name?: StringFilter<"Product"> | string
    ProductStock?: ProductStockListRelationFilter
    ShipmentPlanDetail?: ShipmentPlanDetailListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ProductStock?: ProductStockOrderByRelationAggregateInput
    ShipmentPlanDetail?: ShipmentPlanDetailOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Name?: StringFilter<"Product"> | string
    ProductStock?: ProductStockListRelationFilter
    ShipmentPlanDetail?: ShipmentPlanDetailListRelationFilter
  }, "Id">

  export type ProductOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Product"> | number
    Name?: StringWithAggregatesFilter<"Product"> | string
  }

  export type ProductStockWhereInput = {
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    Id?: IntFilter<"ProductStock"> | number
    ProductId?: IntFilter<"ProductStock"> | number
    WarehouseId?: IntFilter<"ProductStock"> | number
    Used?: IntFilter<"ProductStock"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    ReceivingAchievementDetail?: ReceivingAchievementDetailListRelationFilter
    ShipmentAchievementDetail?: ShipmentAchievementDetailListRelationFilter
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailListRelationFilter
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailListRelationFilter
    TreatmentPlanDetail?: TreatmentPlanDetailListRelationFilter
  }

  export type ProductStockOrderByWithRelationInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
    Product?: ProductOrderByWithRelationInput
    Warehouse?: WarehouseOrderByWithRelationInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailOrderByRelationAggregateInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailOrderByRelationAggregateInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailOrderByRelationAggregateInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailOrderByRelationAggregateInput
    TreatmentPlanDetail?: TreatmentPlanDetailOrderByRelationAggregateInput
  }

  export type ProductStockWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    ProductId?: IntFilter<"ProductStock"> | number
    WarehouseId?: IntFilter<"ProductStock"> | number
    Used?: IntFilter<"ProductStock"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    Warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    ReceivingAchievementDetail?: ReceivingAchievementDetailListRelationFilter
    ShipmentAchievementDetail?: ShipmentAchievementDetailListRelationFilter
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailListRelationFilter
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailListRelationFilter
    TreatmentPlanDetail?: TreatmentPlanDetailListRelationFilter
  }, "Id">

  export type ProductStockOrderByWithAggregationInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
    _count?: ProductStockCountOrderByAggregateInput
    _avg?: ProductStockAvgOrderByAggregateInput
    _max?: ProductStockMaxOrderByAggregateInput
    _min?: ProductStockMinOrderByAggregateInput
    _sum?: ProductStockSumOrderByAggregateInput
  }

  export type ProductStockScalarWhereWithAggregatesInput = {
    AND?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    OR?: ProductStockScalarWhereWithAggregatesInput[]
    NOT?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ProductStock"> | number
    ProductId?: IntWithAggregatesFilter<"ProductStock"> | number
    WarehouseId?: IntWithAggregatesFilter<"ProductStock"> | number
    Used?: IntWithAggregatesFilter<"ProductStock"> | number
  }

  export type ReceivingAchievementWhereInput = {
    AND?: ReceivingAchievementWhereInput | ReceivingAchievementWhereInput[]
    OR?: ReceivingAchievementWhereInput[]
    NOT?: ReceivingAchievementWhereInput | ReceivingAchievementWhereInput[]
    Id?: IntFilter<"ReceivingAchievement"> | number
    ReceivedAt?: DateTimeFilter<"ReceivingAchievement"> | Date | string
    EmployeeId?: IntFilter<"ReceivingAchievement"> | number
    Employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    ReceivingAchievementDetail?: ReceivingAchievementDetailListRelationFilter
  }

  export type ReceivingAchievementOrderByWithRelationInput = {
    Id?: SortOrder
    ReceivedAt?: SortOrder
    EmployeeId?: SortOrder
    Employee?: EmployeeOrderByWithRelationInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailOrderByRelationAggregateInput
  }

  export type ReceivingAchievementWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ReceivingAchievementWhereInput | ReceivingAchievementWhereInput[]
    OR?: ReceivingAchievementWhereInput[]
    NOT?: ReceivingAchievementWhereInput | ReceivingAchievementWhereInput[]
    ReceivedAt?: DateTimeFilter<"ReceivingAchievement"> | Date | string
    EmployeeId?: IntFilter<"ReceivingAchievement"> | number
    Employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    ReceivingAchievementDetail?: ReceivingAchievementDetailListRelationFilter
  }, "Id">

  export type ReceivingAchievementOrderByWithAggregationInput = {
    Id?: SortOrder
    ReceivedAt?: SortOrder
    EmployeeId?: SortOrder
    _count?: ReceivingAchievementCountOrderByAggregateInput
    _avg?: ReceivingAchievementAvgOrderByAggregateInput
    _max?: ReceivingAchievementMaxOrderByAggregateInput
    _min?: ReceivingAchievementMinOrderByAggregateInput
    _sum?: ReceivingAchievementSumOrderByAggregateInput
  }

  export type ReceivingAchievementScalarWhereWithAggregatesInput = {
    AND?: ReceivingAchievementScalarWhereWithAggregatesInput | ReceivingAchievementScalarWhereWithAggregatesInput[]
    OR?: ReceivingAchievementScalarWhereWithAggregatesInput[]
    NOT?: ReceivingAchievementScalarWhereWithAggregatesInput | ReceivingAchievementScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ReceivingAchievement"> | number
    ReceivedAt?: DateTimeWithAggregatesFilter<"ReceivingAchievement"> | Date | string
    EmployeeId?: IntWithAggregatesFilter<"ReceivingAchievement"> | number
  }

  export type ReceivingAchievementDetailWhereInput = {
    AND?: ReceivingAchievementDetailWhereInput | ReceivingAchievementDetailWhereInput[]
    OR?: ReceivingAchievementDetailWhereInput[]
    NOT?: ReceivingAchievementDetailWhereInput | ReceivingAchievementDetailWhereInput[]
    Id?: IntFilter<"ReceivingAchievementDetail"> | number
    ReceivingAchievementId?: IntFilter<"ReceivingAchievementDetail"> | number
    ProductStockId?: IntFilter<"ReceivingAchievementDetail"> | number
    ProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    ReceivingAchievement?: XOR<ReceivingAchievementScalarRelationFilter, ReceivingAchievementWhereInput>
  }

  export type ReceivingAchievementDetailOrderByWithRelationInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ProductStock?: ProductStockOrderByWithRelationInput
    ReceivingAchievement?: ReceivingAchievementOrderByWithRelationInput
  }

  export type ReceivingAchievementDetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ReceivingAchievementDetailWhereInput | ReceivingAchievementDetailWhereInput[]
    OR?: ReceivingAchievementDetailWhereInput[]
    NOT?: ReceivingAchievementDetailWhereInput | ReceivingAchievementDetailWhereInput[]
    ReceivingAchievementId?: IntFilter<"ReceivingAchievementDetail"> | number
    ProductStockId?: IntFilter<"ReceivingAchievementDetail"> | number
    ProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    ReceivingAchievement?: XOR<ReceivingAchievementScalarRelationFilter, ReceivingAchievementWhereInput>
  }, "Id">

  export type ReceivingAchievementDetailOrderByWithAggregationInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
    _count?: ReceivingAchievementDetailCountOrderByAggregateInput
    _avg?: ReceivingAchievementDetailAvgOrderByAggregateInput
    _max?: ReceivingAchievementDetailMaxOrderByAggregateInput
    _min?: ReceivingAchievementDetailMinOrderByAggregateInput
    _sum?: ReceivingAchievementDetailSumOrderByAggregateInput
  }

  export type ReceivingAchievementDetailScalarWhereWithAggregatesInput = {
    AND?: ReceivingAchievementDetailScalarWhereWithAggregatesInput | ReceivingAchievementDetailScalarWhereWithAggregatesInput[]
    OR?: ReceivingAchievementDetailScalarWhereWithAggregatesInput[]
    NOT?: ReceivingAchievementDetailScalarWhereWithAggregatesInput | ReceivingAchievementDetailScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ReceivingAchievementDetail"> | number
    ReceivingAchievementId?: IntWithAggregatesFilter<"ReceivingAchievementDetail"> | number
    ProductStockId?: IntWithAggregatesFilter<"ReceivingAchievementDetail"> | number
  }

  export type ShipmentAchievementWhereInput = {
    AND?: ShipmentAchievementWhereInput | ShipmentAchievementWhereInput[]
    OR?: ShipmentAchievementWhereInput[]
    NOT?: ShipmentAchievementWhereInput | ShipmentAchievementWhereInput[]
    Id?: IntFilter<"ShipmentAchievement"> | number
    ShippedAt?: DateTimeFilter<"ShipmentAchievement"> | Date | string
    EmployeeId?: IntFilter<"ShipmentAchievement"> | number
    Employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    ShipmentAchievementDetail?: ShipmentAchievementDetailListRelationFilter
  }

  export type ShipmentAchievementOrderByWithRelationInput = {
    Id?: SortOrder
    ShippedAt?: SortOrder
    EmployeeId?: SortOrder
    Employee?: EmployeeOrderByWithRelationInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailOrderByRelationAggregateInput
  }

  export type ShipmentAchievementWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ShipmentAchievementWhereInput | ShipmentAchievementWhereInput[]
    OR?: ShipmentAchievementWhereInput[]
    NOT?: ShipmentAchievementWhereInput | ShipmentAchievementWhereInput[]
    ShippedAt?: DateTimeFilter<"ShipmentAchievement"> | Date | string
    EmployeeId?: IntFilter<"ShipmentAchievement"> | number
    Employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    ShipmentAchievementDetail?: ShipmentAchievementDetailListRelationFilter
  }, "Id">

  export type ShipmentAchievementOrderByWithAggregationInput = {
    Id?: SortOrder
    ShippedAt?: SortOrder
    EmployeeId?: SortOrder
    _count?: ShipmentAchievementCountOrderByAggregateInput
    _avg?: ShipmentAchievementAvgOrderByAggregateInput
    _max?: ShipmentAchievementMaxOrderByAggregateInput
    _min?: ShipmentAchievementMinOrderByAggregateInput
    _sum?: ShipmentAchievementSumOrderByAggregateInput
  }

  export type ShipmentAchievementScalarWhereWithAggregatesInput = {
    AND?: ShipmentAchievementScalarWhereWithAggregatesInput | ShipmentAchievementScalarWhereWithAggregatesInput[]
    OR?: ShipmentAchievementScalarWhereWithAggregatesInput[]
    NOT?: ShipmentAchievementScalarWhereWithAggregatesInput | ShipmentAchievementScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ShipmentAchievement"> | number
    ShippedAt?: DateTimeWithAggregatesFilter<"ShipmentAchievement"> | Date | string
    EmployeeId?: IntWithAggregatesFilter<"ShipmentAchievement"> | number
  }

  export type ShipmentAchievementDetailWhereInput = {
    AND?: ShipmentAchievementDetailWhereInput | ShipmentAchievementDetailWhereInput[]
    OR?: ShipmentAchievementDetailWhereInput[]
    NOT?: ShipmentAchievementDetailWhereInput | ShipmentAchievementDetailWhereInput[]
    Id?: IntFilter<"ShipmentAchievementDetail"> | number
    ShipmentAchievementId?: IntFilter<"ShipmentAchievementDetail"> | number
    ProductStockId?: IntFilter<"ShipmentAchievementDetail"> | number
    ShipmentPlanDetailId?: IntFilter<"ShipmentAchievementDetail"> | number
    ProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    ShipmentAchievement?: XOR<ShipmentAchievementScalarRelationFilter, ShipmentAchievementWhereInput>
    ShipmentPlanDetail?: XOR<ShipmentPlanDetailScalarRelationFilter, ShipmentPlanDetailWhereInput>
  }

  export type ShipmentAchievementDetailOrderByWithRelationInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
    ProductStock?: ProductStockOrderByWithRelationInput
    ShipmentAchievement?: ShipmentAchievementOrderByWithRelationInput
    ShipmentPlanDetail?: ShipmentPlanDetailOrderByWithRelationInput
  }

  export type ShipmentAchievementDetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ShipmentAchievementDetailWhereInput | ShipmentAchievementDetailWhereInput[]
    OR?: ShipmentAchievementDetailWhereInput[]
    NOT?: ShipmentAchievementDetailWhereInput | ShipmentAchievementDetailWhereInput[]
    ShipmentAchievementId?: IntFilter<"ShipmentAchievementDetail"> | number
    ProductStockId?: IntFilter<"ShipmentAchievementDetail"> | number
    ShipmentPlanDetailId?: IntFilter<"ShipmentAchievementDetail"> | number
    ProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    ShipmentAchievement?: XOR<ShipmentAchievementScalarRelationFilter, ShipmentAchievementWhereInput>
    ShipmentPlanDetail?: XOR<ShipmentPlanDetailScalarRelationFilter, ShipmentPlanDetailWhereInput>
  }, "Id">

  export type ShipmentAchievementDetailOrderByWithAggregationInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
    _count?: ShipmentAchievementDetailCountOrderByAggregateInput
    _avg?: ShipmentAchievementDetailAvgOrderByAggregateInput
    _max?: ShipmentAchievementDetailMaxOrderByAggregateInput
    _min?: ShipmentAchievementDetailMinOrderByAggregateInput
    _sum?: ShipmentAchievementDetailSumOrderByAggregateInput
  }

  export type ShipmentAchievementDetailScalarWhereWithAggregatesInput = {
    AND?: ShipmentAchievementDetailScalarWhereWithAggregatesInput | ShipmentAchievementDetailScalarWhereWithAggregatesInput[]
    OR?: ShipmentAchievementDetailScalarWhereWithAggregatesInput[]
    NOT?: ShipmentAchievementDetailScalarWhereWithAggregatesInput | ShipmentAchievementDetailScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ShipmentAchievementDetail"> | number
    ShipmentAchievementId?: IntWithAggregatesFilter<"ShipmentAchievementDetail"> | number
    ProductStockId?: IntWithAggregatesFilter<"ShipmentAchievementDetail"> | number
    ShipmentPlanDetailId?: IntWithAggregatesFilter<"ShipmentAchievementDetail"> | number
  }

  export type ShipmentPlanWhereInput = {
    AND?: ShipmentPlanWhereInput | ShipmentPlanWhereInput[]
    OR?: ShipmentPlanWhereInput[]
    NOT?: ShipmentPlanWhereInput | ShipmentPlanWhereInput[]
    Id?: IntFilter<"ShipmentPlan"> | number
    CustomerId?: IntFilter<"ShipmentPlan"> | number
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    ShipmentPlanDetail?: ShipmentPlanDetailListRelationFilter
  }

  export type ShipmentPlanOrderByWithRelationInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
    ShipmentPlanDetail?: ShipmentPlanDetailOrderByRelationAggregateInput
  }

  export type ShipmentPlanWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ShipmentPlanWhereInput | ShipmentPlanWhereInput[]
    OR?: ShipmentPlanWhereInput[]
    NOT?: ShipmentPlanWhereInput | ShipmentPlanWhereInput[]
    CustomerId?: IntFilter<"ShipmentPlan"> | number
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    ShipmentPlanDetail?: ShipmentPlanDetailListRelationFilter
  }, "Id">

  export type ShipmentPlanOrderByWithAggregationInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
    _count?: ShipmentPlanCountOrderByAggregateInput
    _avg?: ShipmentPlanAvgOrderByAggregateInput
    _max?: ShipmentPlanMaxOrderByAggregateInput
    _min?: ShipmentPlanMinOrderByAggregateInput
    _sum?: ShipmentPlanSumOrderByAggregateInput
  }

  export type ShipmentPlanScalarWhereWithAggregatesInput = {
    AND?: ShipmentPlanScalarWhereWithAggregatesInput | ShipmentPlanScalarWhereWithAggregatesInput[]
    OR?: ShipmentPlanScalarWhereWithAggregatesInput[]
    NOT?: ShipmentPlanScalarWhereWithAggregatesInput | ShipmentPlanScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ShipmentPlan"> | number
    CustomerId?: IntWithAggregatesFilter<"ShipmentPlan"> | number
  }

  export type ShipmentPlanDetailWhereInput = {
    AND?: ShipmentPlanDetailWhereInput | ShipmentPlanDetailWhereInput[]
    OR?: ShipmentPlanDetailWhereInput[]
    NOT?: ShipmentPlanDetailWhereInput | ShipmentPlanDetailWhereInput[]
    Id?: IntFilter<"ShipmentPlanDetail"> | number
    ShipmentPlanId?: IntFilter<"ShipmentPlanDetail"> | number
    ProductId?: IntFilter<"ShipmentPlanDetail"> | number
    Quantity?: IntFilter<"ShipmentPlanDetail"> | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailListRelationFilter
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ShipmentPlan?: XOR<ShipmentPlanScalarRelationFilter, ShipmentPlanWhereInput>
  }

  export type ShipmentPlanDetailOrderByWithRelationInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    ShipmentAchievementDetail?: ShipmentAchievementDetailOrderByRelationAggregateInput
    Product?: ProductOrderByWithRelationInput
    ShipmentPlan?: ShipmentPlanOrderByWithRelationInput
  }

  export type ShipmentPlanDetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ShipmentPlanDetailWhereInput | ShipmentPlanDetailWhereInput[]
    OR?: ShipmentPlanDetailWhereInput[]
    NOT?: ShipmentPlanDetailWhereInput | ShipmentPlanDetailWhereInput[]
    ShipmentPlanId?: IntFilter<"ShipmentPlanDetail"> | number
    ProductId?: IntFilter<"ShipmentPlanDetail"> | number
    Quantity?: IntFilter<"ShipmentPlanDetail"> | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailListRelationFilter
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ShipmentPlan?: XOR<ShipmentPlanScalarRelationFilter, ShipmentPlanWhereInput>
  }, "Id">

  export type ShipmentPlanDetailOrderByWithAggregationInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
    _count?: ShipmentPlanDetailCountOrderByAggregateInput
    _avg?: ShipmentPlanDetailAvgOrderByAggregateInput
    _max?: ShipmentPlanDetailMaxOrderByAggregateInput
    _min?: ShipmentPlanDetailMinOrderByAggregateInput
    _sum?: ShipmentPlanDetailSumOrderByAggregateInput
  }

  export type ShipmentPlanDetailScalarWhereWithAggregatesInput = {
    AND?: ShipmentPlanDetailScalarWhereWithAggregatesInput | ShipmentPlanDetailScalarWhereWithAggregatesInput[]
    OR?: ShipmentPlanDetailScalarWhereWithAggregatesInput[]
    NOT?: ShipmentPlanDetailScalarWhereWithAggregatesInput | ShipmentPlanDetailScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ShipmentPlanDetail"> | number
    ShipmentPlanId?: IntWithAggregatesFilter<"ShipmentPlanDetail"> | number
    ProductId?: IntWithAggregatesFilter<"ShipmentPlanDetail"> | number
    Quantity?: IntWithAggregatesFilter<"ShipmentPlanDetail"> | number
  }

  export type TreatmentAchievementWhereInput = {
    AND?: TreatmentAchievementWhereInput | TreatmentAchievementWhereInput[]
    OR?: TreatmentAchievementWhereInput[]
    NOT?: TreatmentAchievementWhereInput | TreatmentAchievementWhereInput[]
    Id?: IntFilter<"TreatmentAchievement"> | number
    TreatedAt?: DateTimeFilter<"TreatmentAchievement"> | Date | string
    EmployeeId?: IntFilter<"TreatmentAchievement"> | number
    Employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    TreatmentAchievementDetail?: TreatmentAchievementDetailListRelationFilter
  }

  export type TreatmentAchievementOrderByWithRelationInput = {
    Id?: SortOrder
    TreatedAt?: SortOrder
    EmployeeId?: SortOrder
    Employee?: EmployeeOrderByWithRelationInput
    TreatmentAchievementDetail?: TreatmentAchievementDetailOrderByRelationAggregateInput
  }

  export type TreatmentAchievementWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: TreatmentAchievementWhereInput | TreatmentAchievementWhereInput[]
    OR?: TreatmentAchievementWhereInput[]
    NOT?: TreatmentAchievementWhereInput | TreatmentAchievementWhereInput[]
    TreatedAt?: DateTimeFilter<"TreatmentAchievement"> | Date | string
    EmployeeId?: IntFilter<"TreatmentAchievement"> | number
    Employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    TreatmentAchievementDetail?: TreatmentAchievementDetailListRelationFilter
  }, "Id">

  export type TreatmentAchievementOrderByWithAggregationInput = {
    Id?: SortOrder
    TreatedAt?: SortOrder
    EmployeeId?: SortOrder
    _count?: TreatmentAchievementCountOrderByAggregateInput
    _avg?: TreatmentAchievementAvgOrderByAggregateInput
    _max?: TreatmentAchievementMaxOrderByAggregateInput
    _min?: TreatmentAchievementMinOrderByAggregateInput
    _sum?: TreatmentAchievementSumOrderByAggregateInput
  }

  export type TreatmentAchievementScalarWhereWithAggregatesInput = {
    AND?: TreatmentAchievementScalarWhereWithAggregatesInput | TreatmentAchievementScalarWhereWithAggregatesInput[]
    OR?: TreatmentAchievementScalarWhereWithAggregatesInput[]
    NOT?: TreatmentAchievementScalarWhereWithAggregatesInput | TreatmentAchievementScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"TreatmentAchievement"> | number
    TreatedAt?: DateTimeWithAggregatesFilter<"TreatmentAchievement"> | Date | string
    EmployeeId?: IntWithAggregatesFilter<"TreatmentAchievement"> | number
  }

  export type TreatmentAchievementDetailWhereInput = {
    AND?: TreatmentAchievementDetailWhereInput | TreatmentAchievementDetailWhereInput[]
    OR?: TreatmentAchievementDetailWhereInput[]
    NOT?: TreatmentAchievementDetailWhereInput | TreatmentAchievementDetailWhereInput[]
    Id?: IntFilter<"TreatmentAchievementDetail"> | number
    TreatmentAchievementId?: IntFilter<"TreatmentAchievementDetail"> | number
    TreatmentPlanDetailId?: IntFilter<"TreatmentAchievementDetail"> | number
    UsedProductStockId?: IntFilter<"TreatmentAchievementDetail"> | number
    ProducedProductStockId?: IntFilter<"TreatmentAchievementDetail"> | number
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    TreatmentAchievement?: XOR<TreatmentAchievementScalarRelationFilter, TreatmentAchievementWhereInput>
    TreatmentPlanDetail?: XOR<TreatmentPlanDetailScalarRelationFilter, TreatmentPlanDetailWhereInput>
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
  }

  export type TreatmentAchievementDetailOrderByWithRelationInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: ProductStockOrderByWithRelationInput
    TreatmentAchievement?: TreatmentAchievementOrderByWithRelationInput
    TreatmentPlanDetail?: TreatmentPlanDetailOrderByWithRelationInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: ProductStockOrderByWithRelationInput
  }

  export type TreatmentAchievementDetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: TreatmentAchievementDetailWhereInput | TreatmentAchievementDetailWhereInput[]
    OR?: TreatmentAchievementDetailWhereInput[]
    NOT?: TreatmentAchievementDetailWhereInput | TreatmentAchievementDetailWhereInput[]
    TreatmentAchievementId?: IntFilter<"TreatmentAchievementDetail"> | number
    TreatmentPlanDetailId?: IntFilter<"TreatmentAchievementDetail"> | number
    UsedProductStockId?: IntFilter<"TreatmentAchievementDetail"> | number
    ProducedProductStockId?: IntFilter<"TreatmentAchievementDetail"> | number
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    TreatmentAchievement?: XOR<TreatmentAchievementScalarRelationFilter, TreatmentAchievementWhereInput>
    TreatmentPlanDetail?: XOR<TreatmentPlanDetailScalarRelationFilter, TreatmentPlanDetailWhereInput>
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
  }, "Id">

  export type TreatmentAchievementDetailOrderByWithAggregationInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
    _count?: TreatmentAchievementDetailCountOrderByAggregateInput
    _avg?: TreatmentAchievementDetailAvgOrderByAggregateInput
    _max?: TreatmentAchievementDetailMaxOrderByAggregateInput
    _min?: TreatmentAchievementDetailMinOrderByAggregateInput
    _sum?: TreatmentAchievementDetailSumOrderByAggregateInput
  }

  export type TreatmentAchievementDetailScalarWhereWithAggregatesInput = {
    AND?: TreatmentAchievementDetailScalarWhereWithAggregatesInput | TreatmentAchievementDetailScalarWhereWithAggregatesInput[]
    OR?: TreatmentAchievementDetailScalarWhereWithAggregatesInput[]
    NOT?: TreatmentAchievementDetailScalarWhereWithAggregatesInput | TreatmentAchievementDetailScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"TreatmentAchievementDetail"> | number
    TreatmentAchievementId?: IntWithAggregatesFilter<"TreatmentAchievementDetail"> | number
    TreatmentPlanDetailId?: IntWithAggregatesFilter<"TreatmentAchievementDetail"> | number
    UsedProductStockId?: IntWithAggregatesFilter<"TreatmentAchievementDetail"> | number
    ProducedProductStockId?: IntWithAggregatesFilter<"TreatmentAchievementDetail"> | number
  }

  export type TreatmentPlanWhereInput = {
    AND?: TreatmentPlanWhereInput | TreatmentPlanWhereInput[]
    OR?: TreatmentPlanWhereInput[]
    NOT?: TreatmentPlanWhereInput | TreatmentPlanWhereInput[]
    Id?: IntFilter<"TreatmentPlan"> | number
    TreatmentPlanDetail?: TreatmentPlanDetailListRelationFilter
  }

  export type TreatmentPlanOrderByWithRelationInput = {
    Id?: SortOrder
    TreatmentPlanDetail?: TreatmentPlanDetailOrderByRelationAggregateInput
  }

  export type TreatmentPlanWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: TreatmentPlanWhereInput | TreatmentPlanWhereInput[]
    OR?: TreatmentPlanWhereInput[]
    NOT?: TreatmentPlanWhereInput | TreatmentPlanWhereInput[]
    TreatmentPlanDetail?: TreatmentPlanDetailListRelationFilter
  }, "Id">

  export type TreatmentPlanOrderByWithAggregationInput = {
    Id?: SortOrder
    _count?: TreatmentPlanCountOrderByAggregateInput
    _avg?: TreatmentPlanAvgOrderByAggregateInput
    _max?: TreatmentPlanMaxOrderByAggregateInput
    _min?: TreatmentPlanMinOrderByAggregateInput
    _sum?: TreatmentPlanSumOrderByAggregateInput
  }

  export type TreatmentPlanScalarWhereWithAggregatesInput = {
    AND?: TreatmentPlanScalarWhereWithAggregatesInput | TreatmentPlanScalarWhereWithAggregatesInput[]
    OR?: TreatmentPlanScalarWhereWithAggregatesInput[]
    NOT?: TreatmentPlanScalarWhereWithAggregatesInput | TreatmentPlanScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"TreatmentPlan"> | number
  }

  export type TreatmentPlanDetailWhereInput = {
    AND?: TreatmentPlanDetailWhereInput | TreatmentPlanDetailWhereInput[]
    OR?: TreatmentPlanDetailWhereInput[]
    NOT?: TreatmentPlanDetailWhereInput | TreatmentPlanDetailWhereInput[]
    Id?: IntFilter<"TreatmentPlanDetail"> | number
    TreatmentPlanId?: IntFilter<"TreatmentPlanDetail"> | number
    ProductStockId?: IntFilter<"TreatmentPlanDetail"> | number
    Quantity?: IntFilter<"TreatmentPlanDetail"> | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailListRelationFilter
    ProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    TreatmentPlan?: XOR<TreatmentPlanScalarRelationFilter, TreatmentPlanWhereInput>
  }

  export type TreatmentPlanDetailOrderByWithRelationInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
    TreatmentAchievementDetail?: TreatmentAchievementDetailOrderByRelationAggregateInput
    ProductStock?: ProductStockOrderByWithRelationInput
    TreatmentPlan?: TreatmentPlanOrderByWithRelationInput
  }

  export type TreatmentPlanDetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: TreatmentPlanDetailWhereInput | TreatmentPlanDetailWhereInput[]
    OR?: TreatmentPlanDetailWhereInput[]
    NOT?: TreatmentPlanDetailWhereInput | TreatmentPlanDetailWhereInput[]
    TreatmentPlanId?: IntFilter<"TreatmentPlanDetail"> | number
    ProductStockId?: IntFilter<"TreatmentPlanDetail"> | number
    Quantity?: IntFilter<"TreatmentPlanDetail"> | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailListRelationFilter
    ProductStock?: XOR<ProductStockScalarRelationFilter, ProductStockWhereInput>
    TreatmentPlan?: XOR<TreatmentPlanScalarRelationFilter, TreatmentPlanWhereInput>
  }, "Id">

  export type TreatmentPlanDetailOrderByWithAggregationInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
    _count?: TreatmentPlanDetailCountOrderByAggregateInput
    _avg?: TreatmentPlanDetailAvgOrderByAggregateInput
    _max?: TreatmentPlanDetailMaxOrderByAggregateInput
    _min?: TreatmentPlanDetailMinOrderByAggregateInput
    _sum?: TreatmentPlanDetailSumOrderByAggregateInput
  }

  export type TreatmentPlanDetailScalarWhereWithAggregatesInput = {
    AND?: TreatmentPlanDetailScalarWhereWithAggregatesInput | TreatmentPlanDetailScalarWhereWithAggregatesInput[]
    OR?: TreatmentPlanDetailScalarWhereWithAggregatesInput[]
    NOT?: TreatmentPlanDetailScalarWhereWithAggregatesInput | TreatmentPlanDetailScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"TreatmentPlanDetail"> | number
    TreatmentPlanId?: IntWithAggregatesFilter<"TreatmentPlanDetail"> | number
    ProductStockId?: IntWithAggregatesFilter<"TreatmentPlanDetail"> | number
    Quantity?: IntWithAggregatesFilter<"TreatmentPlanDetail"> | number
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    Id?: IntFilter<"Warehouse"> | number
    Name?: StringFilter<"Warehouse"> | string
    ProductStock?: ProductStockListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ProductStock?: ProductStockOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    Name?: StringFilter<"Warehouse"> | string
    ProductStock?: ProductStockListRelationFilter
  }, "Id">

  export type WarehouseOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Warehouse"> | number
    Name?: StringWithAggregatesFilter<"Warehouse"> | string
  }

  export type CustomerCreateInput = {
    Name: string
    Address: string
    Email: string
    ShipmentPlan?: ShipmentPlanCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    Id?: number
    Name: string
    Address: string
    Email: string
    ShipmentPlan?: ShipmentPlanUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    ShipmentPlan?: ShipmentPlanUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    ShipmentPlan?: ShipmentPlanUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    Name: string
    Address: string
    Email: string
  }

  export type CustomerUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    Name: string
    ReceivingAchievement?: ReceivingAchievementCreateNestedManyWithoutEmployeeInput
    ShipmentAchievement?: ShipmentAchievementCreateNestedManyWithoutEmployeeInput
    TreatmentAchievement?: TreatmentAchievementCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    Id?: number
    Name: string
    ReceivingAchievement?: ReceivingAchievementUncheckedCreateNestedManyWithoutEmployeeInput
    ShipmentAchievement?: ShipmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput
    TreatmentAchievement?: TreatmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ReceivingAchievement?: ReceivingAchievementUpdateManyWithoutEmployeeNestedInput
    ShipmentAchievement?: ShipmentAchievementUpdateManyWithoutEmployeeNestedInput
    TreatmentAchievement?: TreatmentAchievementUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ReceivingAchievement?: ReceivingAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
    ShipmentAchievement?: ShipmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
    TreatmentAchievement?: TreatmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    Name: string
  }

  export type EmployeeUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    Name: string
    ProductStock?: ProductStockCreateNestedManyWithoutProductInput
    ShipmentPlanDetail?: ShipmentPlanDetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    Id?: number
    Name: string
    ProductStock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ProductStock?: ProductStockUpdateManyWithoutProductNestedInput
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ProductStock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    Name: string
  }

  export type ProductUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductStockCreateInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateInput = {
    Id?: number
    ProductId: number
    WarehouseId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUpdateInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockCreateManyInput = {
    ProductId: number
    WarehouseId: number
    Used?: number
  }

  export type ProductStockUpdateManyMutationInput = {
    Used?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementCreateInput = {
    ReceivedAt?: Date | string
    Employee: EmployeeCreateNestedOneWithoutReceivingAchievementInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutReceivingAchievementInput
  }

  export type ReceivingAchievementUncheckedCreateInput = {
    Id?: number
    ReceivedAt?: Date | string
    EmployeeId: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutReceivingAchievementInput
  }

  export type ReceivingAchievementUpdateInput = {
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateOneRequiredWithoutReceivingAchievementNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutReceivingAchievementNestedInput
  }

  export type ReceivingAchievementUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutReceivingAchievementNestedInput
  }

  export type ReceivingAchievementCreateManyInput = {
    ReceivedAt?: Date | string
    EmployeeId: number
  }

  export type ReceivingAchievementUpdateManyMutationInput = {
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceivingAchievementUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementDetailCreateInput = {
    ProductStock: ProductStockCreateNestedOneWithoutReceivingAchievementDetailInput
    ReceivingAchievement: ReceivingAchievementCreateNestedOneWithoutReceivingAchievementDetailInput
  }

  export type ReceivingAchievementDetailUncheckedCreateInput = {
    Id?: number
    ReceivingAchievementId: number
    ProductStockId: number
  }

  export type ReceivingAchievementDetailUpdateInput = {
    ProductStock?: ProductStockUpdateOneRequiredWithoutReceivingAchievementDetailNestedInput
    ReceivingAchievement?: ReceivingAchievementUpdateOneRequiredWithoutReceivingAchievementDetailNestedInput
  }

  export type ReceivingAchievementDetailUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementDetailCreateManyInput = {
    ReceivingAchievementId: number
    ProductStockId: number
  }

  export type ReceivingAchievementDetailUpdateManyMutationInput = {

  }

  export type ReceivingAchievementDetailUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementCreateInput = {
    ShippedAt?: Date | string
    Employee: EmployeeCreateNestedOneWithoutShipmentAchievementInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutShipmentAchievementInput
  }

  export type ShipmentAchievementUncheckedCreateInput = {
    Id?: number
    ShippedAt?: Date | string
    EmployeeId: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentAchievementInput
  }

  export type ShipmentAchievementUpdateInput = {
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateOneRequiredWithoutShipmentAchievementNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutShipmentAchievementNestedInput
  }

  export type ShipmentAchievementUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentAchievementNestedInput
  }

  export type ShipmentAchievementCreateManyInput = {
    ShippedAt?: Date | string
    EmployeeId: number
  }

  export type ShipmentAchievementUpdateManyMutationInput = {
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentAchievementUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailCreateInput = {
    ProductStock: ProductStockCreateNestedOneWithoutShipmentAchievementDetailInput
    ShipmentAchievement: ShipmentAchievementCreateNestedOneWithoutShipmentAchievementDetailInput
    ShipmentPlanDetail: ShipmentPlanDetailCreateNestedOneWithoutShipmentAchievementDetailInput
  }

  export type ShipmentAchievementDetailUncheckedCreateInput = {
    Id?: number
    ShipmentAchievementId: number
    ProductStockId: number
    ShipmentPlanDetailId: number
  }

  export type ShipmentAchievementDetailUpdateInput = {
    ProductStock?: ProductStockUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
    ShipmentAchievement?: ShipmentAchievementUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
  }

  export type ShipmentAchievementDetailUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetailId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailCreateManyInput = {
    ShipmentAchievementId: number
    ProductStockId: number
    ShipmentPlanDetailId: number
  }

  export type ShipmentAchievementDetailUpdateManyMutationInput = {

  }

  export type ShipmentAchievementDetailUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetailId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentPlanCreateInput = {
    Customer: CustomerCreateNestedOneWithoutShipmentPlanInput
    ShipmentPlanDetail?: ShipmentPlanDetailCreateNestedManyWithoutShipmentPlanInput
  }

  export type ShipmentPlanUncheckedCreateInput = {
    Id?: number
    CustomerId: number
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedCreateNestedManyWithoutShipmentPlanInput
  }

  export type ShipmentPlanUpdateInput = {
    Customer?: CustomerUpdateOneRequiredWithoutShipmentPlanNestedInput
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateManyWithoutShipmentPlanNestedInput
  }

  export type ShipmentPlanUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedUpdateManyWithoutShipmentPlanNestedInput
  }

  export type ShipmentPlanCreateManyInput = {
    CustomerId: number
  }

  export type ShipmentPlanUpdateManyMutationInput = {

  }

  export type ShipmentPlanUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentPlanDetailCreateInput = {
    Quantity: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutShipmentPlanDetailInput
    Product: ProductCreateNestedOneWithoutShipmentPlanDetailInput
    ShipmentPlan: ShipmentPlanCreateNestedOneWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailUncheckedCreateInput = {
    Id?: number
    ShipmentPlanId: number
    ProductId: number
    Quantity: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailUpdateInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutShipmentPlanDetailNestedInput
    Product?: ProductUpdateOneRequiredWithoutShipmentPlanDetailNestedInput
    ShipmentPlan?: ShipmentPlanUpdateOneRequiredWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentPlanId?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailCreateManyInput = {
    ShipmentPlanId: number
    ProductId: number
    Quantity: number
  }

  export type ShipmentPlanDetailUpdateManyMutationInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentPlanDetailUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentPlanId?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementCreateInput = {
    TreatedAt?: Date | string
    Employee: EmployeeCreateNestedOneWithoutTreatmentAchievementInput
    TreatmentAchievementDetail?: TreatmentAchievementDetailCreateNestedManyWithoutTreatmentAchievementInput
  }

  export type TreatmentAchievementUncheckedCreateInput = {
    Id?: number
    TreatedAt?: Date | string
    EmployeeId: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentAchievementInput
  }

  export type TreatmentAchievementUpdateInput = {
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateOneRequiredWithoutTreatmentAchievementNestedInput
    TreatmentAchievementDetail?: TreatmentAchievementDetailUpdateManyWithoutTreatmentAchievementNestedInput
  }

  export type TreatmentAchievementUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentAchievementNestedInput
  }

  export type TreatmentAchievementCreateManyInput = {
    TreatedAt?: Date | string
    EmployeeId: number
  }

  export type TreatmentAchievementUpdateManyMutationInput = {
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentAchievementUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailCreateInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievement: TreatmentAchievementCreateNestedOneWithoutTreatmentAchievementDetailInput
    TreatmentPlanDetail: TreatmentPlanDetailCreateNestedOneWithoutTreatmentAchievementDetailInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
  }

  export type TreatmentAchievementDetailUncheckedCreateInput = {
    Id?: number
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailUpdateInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievement?: TreatmentAchievementUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
  }

  export type TreatmentAchievementDetailUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailCreateManyInput = {
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailUpdateManyMutationInput = {

  }

  export type TreatmentAchievementDetailUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentPlanCreateInput = {
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutTreatmentPlanInput
  }

  export type TreatmentPlanUncheckedCreateInput = {
    Id?: number
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutTreatmentPlanInput
  }

  export type TreatmentPlanUpdateInput = {
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutTreatmentPlanNestedInput
  }

  export type TreatmentPlanUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutTreatmentPlanNestedInput
  }

  export type TreatmentPlanCreateManyInput = {

  }

  export type TreatmentPlanUpdateManyMutationInput = {

  }

  export type TreatmentPlanUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentPlanDetailCreateInput = {
    Quantity: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailCreateNestedManyWithoutTreatmentPlanDetailInput
    ProductStock: ProductStockCreateNestedOneWithoutTreatmentPlanDetailInput
    TreatmentPlan: TreatmentPlanCreateNestedOneWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailUncheckedCreateInput = {
    Id?: number
    TreatmentPlanId: number
    ProductStockId: number
    Quantity: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailUpdateInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUpdateManyWithoutTreatmentPlanDetailNestedInput
    ProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput
    TreatmentPlan?: TreatmentPlanUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailCreateManyInput = {
    TreatmentPlanId: number
    ProductStockId: number
    Quantity: number
  }

  export type TreatmentPlanDetailUpdateManyMutationInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentPlanDetailUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseCreateInput = {
    Name: string
    ProductStock?: ProductStockCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    Id?: number
    Name: string
    ProductStock?: ProductStockUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ProductStock?: ProductStockUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ProductStock?: ProductStockUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    Name: string
  }

  export type WarehouseUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ShipmentPlanListRelationFilter = {
    every?: ShipmentPlanWhereInput
    some?: ShipmentPlanWhereInput
    none?: ShipmentPlanWhereInput
  }

  export type ShipmentPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
    Email?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
    Email?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
    Email?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ReceivingAchievementListRelationFilter = {
    every?: ReceivingAchievementWhereInput
    some?: ReceivingAchievementWhereInput
    none?: ReceivingAchievementWhereInput
  }

  export type ShipmentAchievementListRelationFilter = {
    every?: ShipmentAchievementWhereInput
    some?: ShipmentAchievementWhereInput
    none?: ShipmentAchievementWhereInput
  }

  export type TreatmentAchievementListRelationFilter = {
    every?: TreatmentAchievementWhereInput
    some?: TreatmentAchievementWhereInput
    none?: TreatmentAchievementWhereInput
  }

  export type ReceivingAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type ProductStockListRelationFilter = {
    every?: ProductStockWhereInput
    some?: ProductStockWhereInput
    none?: ProductStockWhereInput
  }

  export type ShipmentPlanDetailListRelationFilter = {
    every?: ShipmentPlanDetailWhereInput
    some?: ShipmentPlanDetailWhereInput
    none?: ShipmentPlanDetailWhereInput
  }

  export type ProductStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentPlanDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type ReceivingAchievementDetailListRelationFilter = {
    every?: ReceivingAchievementDetailWhereInput
    some?: ReceivingAchievementDetailWhereInput
    none?: ReceivingAchievementDetailWhereInput
  }

  export type ShipmentAchievementDetailListRelationFilter = {
    every?: ShipmentAchievementDetailWhereInput
    some?: ShipmentAchievementDetailWhereInput
    none?: ShipmentAchievementDetailWhereInput
  }

  export type TreatmentAchievementDetailListRelationFilter = {
    every?: TreatmentAchievementDetailWhereInput
    some?: TreatmentAchievementDetailWhereInput
    none?: TreatmentAchievementDetailWhereInput
  }

  export type TreatmentPlanDetailListRelationFilter = {
    every?: TreatmentPlanDetailWhereInput
    some?: TreatmentPlanDetailWhereInput
    none?: TreatmentPlanDetailWhereInput
  }

  export type ReceivingAchievementDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentAchievementDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentAchievementDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentPlanDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductStockCountOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
  }

  export type ProductStockAvgOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
  }

  export type ProductStockMaxOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
  }

  export type ProductStockMinOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
  }

  export type ProductStockSumOrderByAggregateInput = {
    Id?: SortOrder
    ProductId?: SortOrder
    WarehouseId?: SortOrder
    Used?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type ReceivingAchievementCountOrderByAggregateInput = {
    Id?: SortOrder
    ReceivedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ReceivingAchievementAvgOrderByAggregateInput = {
    Id?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ReceivingAchievementMaxOrderByAggregateInput = {
    Id?: SortOrder
    ReceivedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ReceivingAchievementMinOrderByAggregateInput = {
    Id?: SortOrder
    ReceivedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ReceivingAchievementSumOrderByAggregateInput = {
    Id?: SortOrder
    EmployeeId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductStockScalarRelationFilter = {
    is?: ProductStockWhereInput
    isNot?: ProductStockWhereInput
  }

  export type ReceivingAchievementScalarRelationFilter = {
    is?: ReceivingAchievementWhereInput
    isNot?: ReceivingAchievementWhereInput
  }

  export type ReceivingAchievementDetailCountOrderByAggregateInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
  }

  export type ReceivingAchievementDetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
  }

  export type ReceivingAchievementDetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
  }

  export type ReceivingAchievementDetailMinOrderByAggregateInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
  }

  export type ReceivingAchievementDetailSumOrderByAggregateInput = {
    Id?: SortOrder
    ReceivingAchievementId?: SortOrder
    ProductStockId?: SortOrder
  }

  export type ShipmentAchievementCountOrderByAggregateInput = {
    Id?: SortOrder
    ShippedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ShipmentAchievementAvgOrderByAggregateInput = {
    Id?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ShipmentAchievementMaxOrderByAggregateInput = {
    Id?: SortOrder
    ShippedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ShipmentAchievementMinOrderByAggregateInput = {
    Id?: SortOrder
    ShippedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ShipmentAchievementSumOrderByAggregateInput = {
    Id?: SortOrder
    EmployeeId?: SortOrder
  }

  export type ShipmentAchievementScalarRelationFilter = {
    is?: ShipmentAchievementWhereInput
    isNot?: ShipmentAchievementWhereInput
  }

  export type ShipmentPlanDetailScalarRelationFilter = {
    is?: ShipmentPlanDetailWhereInput
    isNot?: ShipmentPlanDetailWhereInput
  }

  export type ShipmentAchievementDetailCountOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
  }

  export type ShipmentAchievementDetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
  }

  export type ShipmentAchievementDetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
  }

  export type ShipmentAchievementDetailMinOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
  }

  export type ShipmentAchievementDetailSumOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentAchievementId?: SortOrder
    ProductStockId?: SortOrder
    ShipmentPlanDetailId?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ShipmentPlanCountOrderByAggregateInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
  }

  export type ShipmentPlanAvgOrderByAggregateInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
  }

  export type ShipmentPlanMaxOrderByAggregateInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
  }

  export type ShipmentPlanMinOrderByAggregateInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
  }

  export type ShipmentPlanSumOrderByAggregateInput = {
    Id?: SortOrder
    CustomerId?: SortOrder
  }

  export type ShipmentPlanScalarRelationFilter = {
    is?: ShipmentPlanWhereInput
    isNot?: ShipmentPlanWhereInput
  }

  export type ShipmentPlanDetailCountOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type ShipmentPlanDetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type ShipmentPlanDetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type ShipmentPlanDetailMinOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type ShipmentPlanDetailSumOrderByAggregateInput = {
    Id?: SortOrder
    ShipmentPlanId?: SortOrder
    ProductId?: SortOrder
    Quantity?: SortOrder
  }

  export type TreatmentAchievementCountOrderByAggregateInput = {
    Id?: SortOrder
    TreatedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type TreatmentAchievementAvgOrderByAggregateInput = {
    Id?: SortOrder
    EmployeeId?: SortOrder
  }

  export type TreatmentAchievementMaxOrderByAggregateInput = {
    Id?: SortOrder
    TreatedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type TreatmentAchievementMinOrderByAggregateInput = {
    Id?: SortOrder
    TreatedAt?: SortOrder
    EmployeeId?: SortOrder
  }

  export type TreatmentAchievementSumOrderByAggregateInput = {
    Id?: SortOrder
    EmployeeId?: SortOrder
  }

  export type TreatmentAchievementScalarRelationFilter = {
    is?: TreatmentAchievementWhereInput
    isNot?: TreatmentAchievementWhereInput
  }

  export type TreatmentPlanDetailScalarRelationFilter = {
    is?: TreatmentPlanDetailWhereInput
    isNot?: TreatmentPlanDetailWhereInput
  }

  export type TreatmentAchievementDetailCountOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
  }

  export type TreatmentAchievementDetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
  }

  export type TreatmentAchievementDetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
  }

  export type TreatmentAchievementDetailMinOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
  }

  export type TreatmentAchievementDetailSumOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentAchievementId?: SortOrder
    TreatmentPlanDetailId?: SortOrder
    UsedProductStockId?: SortOrder
    ProducedProductStockId?: SortOrder
  }

  export type TreatmentPlanCountOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type TreatmentPlanAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type TreatmentPlanMaxOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type TreatmentPlanMinOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type TreatmentPlanSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type TreatmentPlanScalarRelationFilter = {
    is?: TreatmentPlanWhereInput
    isNot?: TreatmentPlanWhereInput
  }

  export type TreatmentPlanDetailCountOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
  }

  export type TreatmentPlanDetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
  }

  export type TreatmentPlanDetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
  }

  export type TreatmentPlanDetailMinOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
  }

  export type TreatmentPlanDetailSumOrderByAggregateInput = {
    Id?: SortOrder
    TreatmentPlanId?: SortOrder
    ProductStockId?: SortOrder
    Quantity?: SortOrder
  }

  export type WarehouseCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type ShipmentPlanCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentPlanCreateWithoutCustomerInput, ShipmentPlanUncheckedCreateWithoutCustomerInput> | ShipmentPlanCreateWithoutCustomerInput[] | ShipmentPlanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentPlanCreateOrConnectWithoutCustomerInput | ShipmentPlanCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentPlanCreateManyCustomerInputEnvelope
    connect?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
  }

  export type ShipmentPlanUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShipmentPlanCreateWithoutCustomerInput, ShipmentPlanUncheckedCreateWithoutCustomerInput> | ShipmentPlanCreateWithoutCustomerInput[] | ShipmentPlanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentPlanCreateOrConnectWithoutCustomerInput | ShipmentPlanCreateOrConnectWithoutCustomerInput[]
    createMany?: ShipmentPlanCreateManyCustomerInputEnvelope
    connect?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ShipmentPlanUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentPlanCreateWithoutCustomerInput, ShipmentPlanUncheckedCreateWithoutCustomerInput> | ShipmentPlanCreateWithoutCustomerInput[] | ShipmentPlanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentPlanCreateOrConnectWithoutCustomerInput | ShipmentPlanCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentPlanUpsertWithWhereUniqueWithoutCustomerInput | ShipmentPlanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentPlanCreateManyCustomerInputEnvelope
    set?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    disconnect?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    delete?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    connect?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    update?: ShipmentPlanUpdateWithWhereUniqueWithoutCustomerInput | ShipmentPlanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentPlanUpdateManyWithWhereWithoutCustomerInput | ShipmentPlanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentPlanScalarWhereInput | ShipmentPlanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShipmentPlanUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShipmentPlanCreateWithoutCustomerInput, ShipmentPlanUncheckedCreateWithoutCustomerInput> | ShipmentPlanCreateWithoutCustomerInput[] | ShipmentPlanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShipmentPlanCreateOrConnectWithoutCustomerInput | ShipmentPlanCreateOrConnectWithoutCustomerInput[]
    upsert?: ShipmentPlanUpsertWithWhereUniqueWithoutCustomerInput | ShipmentPlanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShipmentPlanCreateManyCustomerInputEnvelope
    set?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    disconnect?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    delete?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    connect?: ShipmentPlanWhereUniqueInput | ShipmentPlanWhereUniqueInput[]
    update?: ShipmentPlanUpdateWithWhereUniqueWithoutCustomerInput | ShipmentPlanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShipmentPlanUpdateManyWithWhereWithoutCustomerInput | ShipmentPlanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShipmentPlanScalarWhereInput | ShipmentPlanScalarWhereInput[]
  }

  export type ReceivingAchievementCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ReceivingAchievementCreateWithoutEmployeeInput, ReceivingAchievementUncheckedCreateWithoutEmployeeInput> | ReceivingAchievementCreateWithoutEmployeeInput[] | ReceivingAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReceivingAchievementCreateOrConnectWithoutEmployeeInput | ReceivingAchievementCreateOrConnectWithoutEmployeeInput[]
    createMany?: ReceivingAchievementCreateManyEmployeeInputEnvelope
    connect?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
  }

  export type ShipmentAchievementCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ShipmentAchievementCreateWithoutEmployeeInput, ShipmentAchievementUncheckedCreateWithoutEmployeeInput> | ShipmentAchievementCreateWithoutEmployeeInput[] | ShipmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentAchievementCreateOrConnectWithoutEmployeeInput | ShipmentAchievementCreateOrConnectWithoutEmployeeInput[]
    createMany?: ShipmentAchievementCreateManyEmployeeInputEnvelope
    connect?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
  }

  export type TreatmentAchievementCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TreatmentAchievementCreateWithoutEmployeeInput, TreatmentAchievementUncheckedCreateWithoutEmployeeInput> | TreatmentAchievementCreateWithoutEmployeeInput[] | TreatmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TreatmentAchievementCreateOrConnectWithoutEmployeeInput | TreatmentAchievementCreateOrConnectWithoutEmployeeInput[]
    createMany?: TreatmentAchievementCreateManyEmployeeInputEnvelope
    connect?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
  }

  export type ReceivingAchievementUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ReceivingAchievementCreateWithoutEmployeeInput, ReceivingAchievementUncheckedCreateWithoutEmployeeInput> | ReceivingAchievementCreateWithoutEmployeeInput[] | ReceivingAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReceivingAchievementCreateOrConnectWithoutEmployeeInput | ReceivingAchievementCreateOrConnectWithoutEmployeeInput[]
    createMany?: ReceivingAchievementCreateManyEmployeeInputEnvelope
    connect?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
  }

  export type ShipmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ShipmentAchievementCreateWithoutEmployeeInput, ShipmentAchievementUncheckedCreateWithoutEmployeeInput> | ShipmentAchievementCreateWithoutEmployeeInput[] | ShipmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentAchievementCreateOrConnectWithoutEmployeeInput | ShipmentAchievementCreateOrConnectWithoutEmployeeInput[]
    createMany?: ShipmentAchievementCreateManyEmployeeInputEnvelope
    connect?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
  }

  export type TreatmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<TreatmentAchievementCreateWithoutEmployeeInput, TreatmentAchievementUncheckedCreateWithoutEmployeeInput> | TreatmentAchievementCreateWithoutEmployeeInput[] | TreatmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TreatmentAchievementCreateOrConnectWithoutEmployeeInput | TreatmentAchievementCreateOrConnectWithoutEmployeeInput[]
    createMany?: TreatmentAchievementCreateManyEmployeeInputEnvelope
    connect?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
  }

  export type ReceivingAchievementUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ReceivingAchievementCreateWithoutEmployeeInput, ReceivingAchievementUncheckedCreateWithoutEmployeeInput> | ReceivingAchievementCreateWithoutEmployeeInput[] | ReceivingAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReceivingAchievementCreateOrConnectWithoutEmployeeInput | ReceivingAchievementCreateOrConnectWithoutEmployeeInput[]
    upsert?: ReceivingAchievementUpsertWithWhereUniqueWithoutEmployeeInput | ReceivingAchievementUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ReceivingAchievementCreateManyEmployeeInputEnvelope
    set?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    disconnect?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    delete?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    connect?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    update?: ReceivingAchievementUpdateWithWhereUniqueWithoutEmployeeInput | ReceivingAchievementUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ReceivingAchievementUpdateManyWithWhereWithoutEmployeeInput | ReceivingAchievementUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ReceivingAchievementScalarWhereInput | ReceivingAchievementScalarWhereInput[]
  }

  export type ShipmentAchievementUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ShipmentAchievementCreateWithoutEmployeeInput, ShipmentAchievementUncheckedCreateWithoutEmployeeInput> | ShipmentAchievementCreateWithoutEmployeeInput[] | ShipmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentAchievementCreateOrConnectWithoutEmployeeInput | ShipmentAchievementCreateOrConnectWithoutEmployeeInput[]
    upsert?: ShipmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput | ShipmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ShipmentAchievementCreateManyEmployeeInputEnvelope
    set?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    disconnect?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    delete?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    connect?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    update?: ShipmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput | ShipmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ShipmentAchievementUpdateManyWithWhereWithoutEmployeeInput | ShipmentAchievementUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ShipmentAchievementScalarWhereInput | ShipmentAchievementScalarWhereInput[]
  }

  export type TreatmentAchievementUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TreatmentAchievementCreateWithoutEmployeeInput, TreatmentAchievementUncheckedCreateWithoutEmployeeInput> | TreatmentAchievementCreateWithoutEmployeeInput[] | TreatmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TreatmentAchievementCreateOrConnectWithoutEmployeeInput | TreatmentAchievementCreateOrConnectWithoutEmployeeInput[]
    upsert?: TreatmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput | TreatmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TreatmentAchievementCreateManyEmployeeInputEnvelope
    set?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    disconnect?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    delete?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    connect?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    update?: TreatmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput | TreatmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TreatmentAchievementUpdateManyWithWhereWithoutEmployeeInput | TreatmentAchievementUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TreatmentAchievementScalarWhereInput | TreatmentAchievementScalarWhereInput[]
  }

  export type ReceivingAchievementUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ReceivingAchievementCreateWithoutEmployeeInput, ReceivingAchievementUncheckedCreateWithoutEmployeeInput> | ReceivingAchievementCreateWithoutEmployeeInput[] | ReceivingAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReceivingAchievementCreateOrConnectWithoutEmployeeInput | ReceivingAchievementCreateOrConnectWithoutEmployeeInput[]
    upsert?: ReceivingAchievementUpsertWithWhereUniqueWithoutEmployeeInput | ReceivingAchievementUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ReceivingAchievementCreateManyEmployeeInputEnvelope
    set?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    disconnect?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    delete?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    connect?: ReceivingAchievementWhereUniqueInput | ReceivingAchievementWhereUniqueInput[]
    update?: ReceivingAchievementUpdateWithWhereUniqueWithoutEmployeeInput | ReceivingAchievementUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ReceivingAchievementUpdateManyWithWhereWithoutEmployeeInput | ReceivingAchievementUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ReceivingAchievementScalarWhereInput | ReceivingAchievementScalarWhereInput[]
  }

  export type ShipmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ShipmentAchievementCreateWithoutEmployeeInput, ShipmentAchievementUncheckedCreateWithoutEmployeeInput> | ShipmentAchievementCreateWithoutEmployeeInput[] | ShipmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentAchievementCreateOrConnectWithoutEmployeeInput | ShipmentAchievementCreateOrConnectWithoutEmployeeInput[]
    upsert?: ShipmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput | ShipmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ShipmentAchievementCreateManyEmployeeInputEnvelope
    set?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    disconnect?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    delete?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    connect?: ShipmentAchievementWhereUniqueInput | ShipmentAchievementWhereUniqueInput[]
    update?: ShipmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput | ShipmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ShipmentAchievementUpdateManyWithWhereWithoutEmployeeInput | ShipmentAchievementUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ShipmentAchievementScalarWhereInput | ShipmentAchievementScalarWhereInput[]
  }

  export type TreatmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<TreatmentAchievementCreateWithoutEmployeeInput, TreatmentAchievementUncheckedCreateWithoutEmployeeInput> | TreatmentAchievementCreateWithoutEmployeeInput[] | TreatmentAchievementUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: TreatmentAchievementCreateOrConnectWithoutEmployeeInput | TreatmentAchievementCreateOrConnectWithoutEmployeeInput[]
    upsert?: TreatmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput | TreatmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: TreatmentAchievementCreateManyEmployeeInputEnvelope
    set?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    disconnect?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    delete?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    connect?: TreatmentAchievementWhereUniqueInput | TreatmentAchievementWhereUniqueInput[]
    update?: TreatmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput | TreatmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: TreatmentAchievementUpdateManyWithWhereWithoutEmployeeInput | TreatmentAchievementUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: TreatmentAchievementScalarWhereInput | TreatmentAchievementScalarWhereInput[]
  }

  export type ProductStockCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type ShipmentPlanDetailCreateNestedManyWithoutProductInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutProductInput, ShipmentPlanDetailUncheckedCreateWithoutProductInput> | ShipmentPlanDetailCreateWithoutProductInput[] | ShipmentPlanDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutProductInput | ShipmentPlanDetailCreateOrConnectWithoutProductInput[]
    createMany?: ShipmentPlanDetailCreateManyProductInputEnvelope
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type ShipmentPlanDetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutProductInput, ShipmentPlanDetailUncheckedCreateWithoutProductInput> | ShipmentPlanDetailCreateWithoutProductInput[] | ShipmentPlanDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutProductInput | ShipmentPlanDetailCreateOrConnectWithoutProductInput[]
    createMany?: ShipmentPlanDetailCreateManyProductInputEnvelope
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
  }

  export type ProductStockUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductInput | ProductStockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductInput | ProductStockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductInput | ProductStockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type ShipmentPlanDetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutProductInput, ShipmentPlanDetailUncheckedCreateWithoutProductInput> | ShipmentPlanDetailCreateWithoutProductInput[] | ShipmentPlanDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutProductInput | ShipmentPlanDetailCreateOrConnectWithoutProductInput[]
    upsert?: ShipmentPlanDetailUpsertWithWhereUniqueWithoutProductInput | ShipmentPlanDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShipmentPlanDetailCreateManyProductInputEnvelope
    set?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    disconnect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    delete?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    update?: ShipmentPlanDetailUpdateWithWhereUniqueWithoutProductInput | ShipmentPlanDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShipmentPlanDetailUpdateManyWithWhereWithoutProductInput | ShipmentPlanDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShipmentPlanDetailScalarWhereInput | ShipmentPlanDetailScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductInput | ProductStockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductInput | ProductStockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductInput | ProductStockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type ShipmentPlanDetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutProductInput, ShipmentPlanDetailUncheckedCreateWithoutProductInput> | ShipmentPlanDetailCreateWithoutProductInput[] | ShipmentPlanDetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutProductInput | ShipmentPlanDetailCreateOrConnectWithoutProductInput[]
    upsert?: ShipmentPlanDetailUpsertWithWhereUniqueWithoutProductInput | ShipmentPlanDetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShipmentPlanDetailCreateManyProductInputEnvelope
    set?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    disconnect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    delete?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    update?: ShipmentPlanDetailUpdateWithWhereUniqueWithoutProductInput | ShipmentPlanDetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShipmentPlanDetailUpdateManyWithWhereWithoutProductInput | ShipmentPlanDetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShipmentPlanDetailScalarWhereInput | ShipmentPlanDetailScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductStockInput = {
    create?: XOR<ProductCreateWithoutProductStockInput, ProductUncheckedCreateWithoutProductStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductStockInput
    connect?: ProductWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutProductStockInput = {
    create?: XOR<WarehouseCreateWithoutProductStockInput, WarehouseUncheckedCreateWithoutProductStockInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutProductStockInput
    connect?: WarehouseWhereUniqueInput
  }

  export type ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutProductStockInput, ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput> | ReceivingAchievementDetailCreateWithoutProductStockInput[] | ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput | ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput[]
    createMany?: ReceivingAchievementDetailCreateManyProductStockInputEnvelope
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
  }

  export type ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutProductStockInput, ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput> | ShipmentAchievementDetailCreateWithoutProductStockInput[] | ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput | ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput[]
    createMany?: ShipmentAchievementDetailCreateManyProductStockInputEnvelope
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentPlanDetailCreateNestedManyWithoutProductStockInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutProductStockInput, TreatmentPlanDetailUncheckedCreateWithoutProductStockInput> | TreatmentPlanDetailCreateWithoutProductStockInput[] | TreatmentPlanDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutProductStockInput | TreatmentPlanDetailCreateOrConnectWithoutProductStockInput[]
    createMany?: TreatmentPlanDetailCreateManyProductStockInputEnvelope
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
  }

  export type ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutProductStockInput, ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput> | ReceivingAchievementDetailCreateWithoutProductStockInput[] | ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput | ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput[]
    createMany?: ReceivingAchievementDetailCreateManyProductStockInputEnvelope
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
  }

  export type ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutProductStockInput, ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput> | ShipmentAchievementDetailCreateWithoutProductStockInput[] | ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput | ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput[]
    createMany?: ShipmentAchievementDetailCreateManyProductStockInputEnvelope
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutProductStockInput, TreatmentPlanDetailUncheckedCreateWithoutProductStockInput> | TreatmentPlanDetailCreateWithoutProductStockInput[] | TreatmentPlanDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutProductStockInput | TreatmentPlanDetailCreateOrConnectWithoutProductStockInput[]
    createMany?: TreatmentPlanDetailCreateManyProductStockInputEnvelope
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutProductStockNestedInput = {
    create?: XOR<ProductCreateWithoutProductStockInput, ProductUncheckedCreateWithoutProductStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductStockInput
    upsert?: ProductUpsertWithoutProductStockInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductStockInput, ProductUpdateWithoutProductStockInput>, ProductUncheckedUpdateWithoutProductStockInput>
  }

  export type WarehouseUpdateOneRequiredWithoutProductStockNestedInput = {
    create?: XOR<WarehouseCreateWithoutProductStockInput, WarehouseUncheckedCreateWithoutProductStockInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutProductStockInput
    upsert?: WarehouseUpsertWithoutProductStockInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutProductStockInput, WarehouseUpdateWithoutProductStockInput>, WarehouseUncheckedUpdateWithoutProductStockInput>
  }

  export type ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutProductStockInput, ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput> | ReceivingAchievementDetailCreateWithoutProductStockInput[] | ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput | ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput[]
    upsert?: ReceivingAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput | ReceivingAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput[]
    createMany?: ReceivingAchievementDetailCreateManyProductStockInputEnvelope
    set?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    disconnect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    delete?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    update?: ReceivingAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput | ReceivingAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput[]
    updateMany?: ReceivingAchievementDetailUpdateManyWithWhereWithoutProductStockInput | ReceivingAchievementDetailUpdateManyWithWhereWithoutProductStockInput[]
    deleteMany?: ReceivingAchievementDetailScalarWhereInput | ReceivingAchievementDetailScalarWhereInput[]
  }

  export type ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutProductStockInput, ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput> | ShipmentAchievementDetailCreateWithoutProductStockInput[] | ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput | ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput[]
    upsert?: ShipmentAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput | ShipmentAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput[]
    createMany?: ShipmentAchievementDetailCreateManyProductStockInputEnvelope
    set?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    disconnect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    delete?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    update?: ShipmentAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput | ShipmentAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput[]
    updateMany?: ShipmentAchievementDetailUpdateManyWithWhereWithoutProductStockInput | ShipmentAchievementDetailUpdateManyWithWhereWithoutProductStockInput[]
    deleteMany?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutProductStockInput, TreatmentPlanDetailUncheckedCreateWithoutProductStockInput> | TreatmentPlanDetailCreateWithoutProductStockInput[] | TreatmentPlanDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutProductStockInput | TreatmentPlanDetailCreateOrConnectWithoutProductStockInput[]
    upsert?: TreatmentPlanDetailUpsertWithWhereUniqueWithoutProductStockInput | TreatmentPlanDetailUpsertWithWhereUniqueWithoutProductStockInput[]
    createMany?: TreatmentPlanDetailCreateManyProductStockInputEnvelope
    set?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    disconnect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    delete?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    update?: TreatmentPlanDetailUpdateWithWhereUniqueWithoutProductStockInput | TreatmentPlanDetailUpdateWithWhereUniqueWithoutProductStockInput[]
    updateMany?: TreatmentPlanDetailUpdateManyWithWhereWithoutProductStockInput | TreatmentPlanDetailUpdateManyWithWhereWithoutProductStockInput[]
    deleteMany?: TreatmentPlanDetailScalarWhereInput | TreatmentPlanDetailScalarWhereInput[]
  }

  export type ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutProductStockInput, ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput> | ReceivingAchievementDetailCreateWithoutProductStockInput[] | ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput | ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput[]
    upsert?: ReceivingAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput | ReceivingAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput[]
    createMany?: ReceivingAchievementDetailCreateManyProductStockInputEnvelope
    set?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    disconnect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    delete?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    update?: ReceivingAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput | ReceivingAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput[]
    updateMany?: ReceivingAchievementDetailUpdateManyWithWhereWithoutProductStockInput | ReceivingAchievementDetailUpdateManyWithWhereWithoutProductStockInput[]
    deleteMany?: ReceivingAchievementDetailScalarWhereInput | ReceivingAchievementDetailScalarWhereInput[]
  }

  export type ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutProductStockInput, ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput> | ShipmentAchievementDetailCreateWithoutProductStockInput[] | ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput | ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput[]
    upsert?: ShipmentAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput | ShipmentAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput[]
    createMany?: ShipmentAchievementDetailCreateManyProductStockInputEnvelope
    set?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    disconnect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    delete?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    update?: ShipmentAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput | ShipmentAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput[]
    updateMany?: ShipmentAchievementDetailUpdateManyWithWhereWithoutProductStockInput | ShipmentAchievementDetailUpdateManyWithWhereWithoutProductStockInput[]
    deleteMany?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput> | TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[] | TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    createMany?: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutProductStockInput, TreatmentPlanDetailUncheckedCreateWithoutProductStockInput> | TreatmentPlanDetailCreateWithoutProductStockInput[] | TreatmentPlanDetailUncheckedCreateWithoutProductStockInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutProductStockInput | TreatmentPlanDetailCreateOrConnectWithoutProductStockInput[]
    upsert?: TreatmentPlanDetailUpsertWithWhereUniqueWithoutProductStockInput | TreatmentPlanDetailUpsertWithWhereUniqueWithoutProductStockInput[]
    createMany?: TreatmentPlanDetailCreateManyProductStockInputEnvelope
    set?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    disconnect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    delete?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    update?: TreatmentPlanDetailUpdateWithWhereUniqueWithoutProductStockInput | TreatmentPlanDetailUpdateWithWhereUniqueWithoutProductStockInput[]
    updateMany?: TreatmentPlanDetailUpdateManyWithWhereWithoutProductStockInput | TreatmentPlanDetailUpdateManyWithWhereWithoutProductStockInput[]
    deleteMany?: TreatmentPlanDetailScalarWhereInput | TreatmentPlanDetailScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutReceivingAchievementInput = {
    create?: XOR<EmployeeCreateWithoutReceivingAchievementInput, EmployeeUncheckedCreateWithoutReceivingAchievementInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReceivingAchievementInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ReceivingAchievementDetailCreateNestedManyWithoutReceivingAchievementInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput> | ReceivingAchievementDetailCreateWithoutReceivingAchievementInput[] | ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput | ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput[]
    createMany?: ReceivingAchievementDetailCreateManyReceivingAchievementInputEnvelope
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
  }

  export type ReceivingAchievementDetailUncheckedCreateNestedManyWithoutReceivingAchievementInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput> | ReceivingAchievementDetailCreateWithoutReceivingAchievementInput[] | ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput | ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput[]
    createMany?: ReceivingAchievementDetailCreateManyReceivingAchievementInputEnvelope
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeUpdateOneRequiredWithoutReceivingAchievementNestedInput = {
    create?: XOR<EmployeeCreateWithoutReceivingAchievementInput, EmployeeUncheckedCreateWithoutReceivingAchievementInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReceivingAchievementInput
    upsert?: EmployeeUpsertWithoutReceivingAchievementInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutReceivingAchievementInput, EmployeeUpdateWithoutReceivingAchievementInput>, EmployeeUncheckedUpdateWithoutReceivingAchievementInput>
  }

  export type ReceivingAchievementDetailUpdateManyWithoutReceivingAchievementNestedInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput> | ReceivingAchievementDetailCreateWithoutReceivingAchievementInput[] | ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput | ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput[]
    upsert?: ReceivingAchievementDetailUpsertWithWhereUniqueWithoutReceivingAchievementInput | ReceivingAchievementDetailUpsertWithWhereUniqueWithoutReceivingAchievementInput[]
    createMany?: ReceivingAchievementDetailCreateManyReceivingAchievementInputEnvelope
    set?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    disconnect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    delete?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    update?: ReceivingAchievementDetailUpdateWithWhereUniqueWithoutReceivingAchievementInput | ReceivingAchievementDetailUpdateWithWhereUniqueWithoutReceivingAchievementInput[]
    updateMany?: ReceivingAchievementDetailUpdateManyWithWhereWithoutReceivingAchievementInput | ReceivingAchievementDetailUpdateManyWithWhereWithoutReceivingAchievementInput[]
    deleteMany?: ReceivingAchievementDetailScalarWhereInput | ReceivingAchievementDetailScalarWhereInput[]
  }

  export type ReceivingAchievementDetailUncheckedUpdateManyWithoutReceivingAchievementNestedInput = {
    create?: XOR<ReceivingAchievementDetailCreateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput> | ReceivingAchievementDetailCreateWithoutReceivingAchievementInput[] | ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput[]
    connectOrCreate?: ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput | ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput[]
    upsert?: ReceivingAchievementDetailUpsertWithWhereUniqueWithoutReceivingAchievementInput | ReceivingAchievementDetailUpsertWithWhereUniqueWithoutReceivingAchievementInput[]
    createMany?: ReceivingAchievementDetailCreateManyReceivingAchievementInputEnvelope
    set?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    disconnect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    delete?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    connect?: ReceivingAchievementDetailWhereUniqueInput | ReceivingAchievementDetailWhereUniqueInput[]
    update?: ReceivingAchievementDetailUpdateWithWhereUniqueWithoutReceivingAchievementInput | ReceivingAchievementDetailUpdateWithWhereUniqueWithoutReceivingAchievementInput[]
    updateMany?: ReceivingAchievementDetailUpdateManyWithWhereWithoutReceivingAchievementInput | ReceivingAchievementDetailUpdateManyWithWhereWithoutReceivingAchievementInput[]
    deleteMany?: ReceivingAchievementDetailScalarWhereInput | ReceivingAchievementDetailScalarWhereInput[]
  }

  export type ProductStockCreateNestedOneWithoutReceivingAchievementDetailInput = {
    create?: XOR<ProductStockCreateWithoutReceivingAchievementDetailInput, ProductStockUncheckedCreateWithoutReceivingAchievementDetailInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutReceivingAchievementDetailInput
    connect?: ProductStockWhereUniqueInput
  }

  export type ReceivingAchievementCreateNestedOneWithoutReceivingAchievementDetailInput = {
    create?: XOR<ReceivingAchievementCreateWithoutReceivingAchievementDetailInput, ReceivingAchievementUncheckedCreateWithoutReceivingAchievementDetailInput>
    connectOrCreate?: ReceivingAchievementCreateOrConnectWithoutReceivingAchievementDetailInput
    connect?: ReceivingAchievementWhereUniqueInput
  }

  export type ProductStockUpdateOneRequiredWithoutReceivingAchievementDetailNestedInput = {
    create?: XOR<ProductStockCreateWithoutReceivingAchievementDetailInput, ProductStockUncheckedCreateWithoutReceivingAchievementDetailInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutReceivingAchievementDetailInput
    upsert?: ProductStockUpsertWithoutReceivingAchievementDetailInput
    connect?: ProductStockWhereUniqueInput
    update?: XOR<XOR<ProductStockUpdateToOneWithWhereWithoutReceivingAchievementDetailInput, ProductStockUpdateWithoutReceivingAchievementDetailInput>, ProductStockUncheckedUpdateWithoutReceivingAchievementDetailInput>
  }

  export type ReceivingAchievementUpdateOneRequiredWithoutReceivingAchievementDetailNestedInput = {
    create?: XOR<ReceivingAchievementCreateWithoutReceivingAchievementDetailInput, ReceivingAchievementUncheckedCreateWithoutReceivingAchievementDetailInput>
    connectOrCreate?: ReceivingAchievementCreateOrConnectWithoutReceivingAchievementDetailInput
    upsert?: ReceivingAchievementUpsertWithoutReceivingAchievementDetailInput
    connect?: ReceivingAchievementWhereUniqueInput
    update?: XOR<XOR<ReceivingAchievementUpdateToOneWithWhereWithoutReceivingAchievementDetailInput, ReceivingAchievementUpdateWithoutReceivingAchievementDetailInput>, ReceivingAchievementUncheckedUpdateWithoutReceivingAchievementDetailInput>
  }

  export type EmployeeCreateNestedOneWithoutShipmentAchievementInput = {
    create?: XOR<EmployeeCreateWithoutShipmentAchievementInput, EmployeeUncheckedCreateWithoutShipmentAchievementInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutShipmentAchievementInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ShipmentAchievementDetailCreateNestedManyWithoutShipmentAchievementInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput> | ShipmentAchievementDetailCreateWithoutShipmentAchievementInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentAchievementInputEnvelope
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
  }

  export type ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentAchievementInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput> | ShipmentAchievementDetailCreateWithoutShipmentAchievementInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentAchievementInputEnvelope
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutShipmentAchievementNestedInput = {
    create?: XOR<EmployeeCreateWithoutShipmentAchievementInput, EmployeeUncheckedCreateWithoutShipmentAchievementInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutShipmentAchievementInput
    upsert?: EmployeeUpsertWithoutShipmentAchievementInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutShipmentAchievementInput, EmployeeUpdateWithoutShipmentAchievementInput>, EmployeeUncheckedUpdateWithoutShipmentAchievementInput>
  }

  export type ShipmentAchievementDetailUpdateManyWithoutShipmentAchievementNestedInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput> | ShipmentAchievementDetailCreateWithoutShipmentAchievementInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput[]
    upsert?: ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentAchievementInput | ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentAchievementInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentAchievementInputEnvelope
    set?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    disconnect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    delete?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    update?: ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentAchievementInput | ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentAchievementInput[]
    updateMany?: ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentAchievementInput | ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentAchievementInput[]
    deleteMany?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
  }

  export type ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentAchievementNestedInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput> | ShipmentAchievementDetailCreateWithoutShipmentAchievementInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput[]
    upsert?: ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentAchievementInput | ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentAchievementInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentAchievementInputEnvelope
    set?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    disconnect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    delete?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    update?: ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentAchievementInput | ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentAchievementInput[]
    updateMany?: ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentAchievementInput | ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentAchievementInput[]
    deleteMany?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
  }

  export type ProductStockCreateNestedOneWithoutShipmentAchievementDetailInput = {
    create?: XOR<ProductStockCreateWithoutShipmentAchievementDetailInput, ProductStockUncheckedCreateWithoutShipmentAchievementDetailInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutShipmentAchievementDetailInput
    connect?: ProductStockWhereUniqueInput
  }

  export type ShipmentAchievementCreateNestedOneWithoutShipmentAchievementDetailInput = {
    create?: XOR<ShipmentAchievementCreateWithoutShipmentAchievementDetailInput, ShipmentAchievementUncheckedCreateWithoutShipmentAchievementDetailInput>
    connectOrCreate?: ShipmentAchievementCreateOrConnectWithoutShipmentAchievementDetailInput
    connect?: ShipmentAchievementWhereUniqueInput
  }

  export type ShipmentPlanDetailCreateNestedOneWithoutShipmentAchievementDetailInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentAchievementDetailInput>
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutShipmentAchievementDetailInput
    connect?: ShipmentPlanDetailWhereUniqueInput
  }

  export type ProductStockUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput = {
    create?: XOR<ProductStockCreateWithoutShipmentAchievementDetailInput, ProductStockUncheckedCreateWithoutShipmentAchievementDetailInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutShipmentAchievementDetailInput
    upsert?: ProductStockUpsertWithoutShipmentAchievementDetailInput
    connect?: ProductStockWhereUniqueInput
    update?: XOR<XOR<ProductStockUpdateToOneWithWhereWithoutShipmentAchievementDetailInput, ProductStockUpdateWithoutShipmentAchievementDetailInput>, ProductStockUncheckedUpdateWithoutShipmentAchievementDetailInput>
  }

  export type ShipmentAchievementUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput = {
    create?: XOR<ShipmentAchievementCreateWithoutShipmentAchievementDetailInput, ShipmentAchievementUncheckedCreateWithoutShipmentAchievementDetailInput>
    connectOrCreate?: ShipmentAchievementCreateOrConnectWithoutShipmentAchievementDetailInput
    upsert?: ShipmentAchievementUpsertWithoutShipmentAchievementDetailInput
    connect?: ShipmentAchievementWhereUniqueInput
    update?: XOR<XOR<ShipmentAchievementUpdateToOneWithWhereWithoutShipmentAchievementDetailInput, ShipmentAchievementUpdateWithoutShipmentAchievementDetailInput>, ShipmentAchievementUncheckedUpdateWithoutShipmentAchievementDetailInput>
  }

  export type ShipmentPlanDetailUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentAchievementDetailInput>
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutShipmentAchievementDetailInput
    upsert?: ShipmentPlanDetailUpsertWithoutShipmentAchievementDetailInput
    connect?: ShipmentPlanDetailWhereUniqueInput
    update?: XOR<XOR<ShipmentPlanDetailUpdateToOneWithWhereWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUpdateWithoutShipmentAchievementDetailInput>, ShipmentPlanDetailUncheckedUpdateWithoutShipmentAchievementDetailInput>
  }

  export type CustomerCreateNestedOneWithoutShipmentPlanInput = {
    create?: XOR<CustomerCreateWithoutShipmentPlanInput, CustomerUncheckedCreateWithoutShipmentPlanInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShipmentPlanInput
    connect?: CustomerWhereUniqueInput
  }

  export type ShipmentPlanDetailCreateNestedManyWithoutShipmentPlanInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput> | ShipmentPlanDetailCreateWithoutShipmentPlanInput[] | ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput | ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput[]
    createMany?: ShipmentPlanDetailCreateManyShipmentPlanInputEnvelope
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
  }

  export type ShipmentPlanDetailUncheckedCreateNestedManyWithoutShipmentPlanInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput> | ShipmentPlanDetailCreateWithoutShipmentPlanInput[] | ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput | ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput[]
    createMany?: ShipmentPlanDetailCreateManyShipmentPlanInputEnvelope
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutShipmentPlanNestedInput = {
    create?: XOR<CustomerCreateWithoutShipmentPlanInput, CustomerUncheckedCreateWithoutShipmentPlanInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShipmentPlanInput
    upsert?: CustomerUpsertWithoutShipmentPlanInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutShipmentPlanInput, CustomerUpdateWithoutShipmentPlanInput>, CustomerUncheckedUpdateWithoutShipmentPlanInput>
  }

  export type ShipmentPlanDetailUpdateManyWithoutShipmentPlanNestedInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput> | ShipmentPlanDetailCreateWithoutShipmentPlanInput[] | ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput | ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput[]
    upsert?: ShipmentPlanDetailUpsertWithWhereUniqueWithoutShipmentPlanInput | ShipmentPlanDetailUpsertWithWhereUniqueWithoutShipmentPlanInput[]
    createMany?: ShipmentPlanDetailCreateManyShipmentPlanInputEnvelope
    set?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    disconnect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    delete?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    update?: ShipmentPlanDetailUpdateWithWhereUniqueWithoutShipmentPlanInput | ShipmentPlanDetailUpdateWithWhereUniqueWithoutShipmentPlanInput[]
    updateMany?: ShipmentPlanDetailUpdateManyWithWhereWithoutShipmentPlanInput | ShipmentPlanDetailUpdateManyWithWhereWithoutShipmentPlanInput[]
    deleteMany?: ShipmentPlanDetailScalarWhereInput | ShipmentPlanDetailScalarWhereInput[]
  }

  export type ShipmentPlanDetailUncheckedUpdateManyWithoutShipmentPlanNestedInput = {
    create?: XOR<ShipmentPlanDetailCreateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput> | ShipmentPlanDetailCreateWithoutShipmentPlanInput[] | ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput[]
    connectOrCreate?: ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput | ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput[]
    upsert?: ShipmentPlanDetailUpsertWithWhereUniqueWithoutShipmentPlanInput | ShipmentPlanDetailUpsertWithWhereUniqueWithoutShipmentPlanInput[]
    createMany?: ShipmentPlanDetailCreateManyShipmentPlanInputEnvelope
    set?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    disconnect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    delete?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    connect?: ShipmentPlanDetailWhereUniqueInput | ShipmentPlanDetailWhereUniqueInput[]
    update?: ShipmentPlanDetailUpdateWithWhereUniqueWithoutShipmentPlanInput | ShipmentPlanDetailUpdateWithWhereUniqueWithoutShipmentPlanInput[]
    updateMany?: ShipmentPlanDetailUpdateManyWithWhereWithoutShipmentPlanInput | ShipmentPlanDetailUpdateManyWithWhereWithoutShipmentPlanInput[]
    deleteMany?: ShipmentPlanDetailScalarWhereInput | ShipmentPlanDetailScalarWhereInput[]
  }

  export type ShipmentAchievementDetailCreateNestedManyWithoutShipmentPlanDetailInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput> | ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentPlanDetailInputEnvelope
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutShipmentPlanDetailInput = {
    create?: XOR<ProductCreateWithoutShipmentPlanDetailInput, ProductUncheckedCreateWithoutShipmentPlanDetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShipmentPlanDetailInput
    connect?: ProductWhereUniqueInput
  }

  export type ShipmentPlanCreateNestedOneWithoutShipmentPlanDetailInput = {
    create?: XOR<ShipmentPlanCreateWithoutShipmentPlanDetailInput, ShipmentPlanUncheckedCreateWithoutShipmentPlanDetailInput>
    connectOrCreate?: ShipmentPlanCreateOrConnectWithoutShipmentPlanDetailInput
    connect?: ShipmentPlanWhereUniqueInput
  }

  export type ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentPlanDetailInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput> | ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentPlanDetailInputEnvelope
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
  }

  export type ShipmentAchievementDetailUpdateManyWithoutShipmentPlanDetailNestedInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput> | ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput[]
    upsert?: ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentPlanDetailInput | ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentPlanDetailInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentPlanDetailInputEnvelope
    set?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    disconnect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    delete?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    update?: ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentPlanDetailInput | ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentPlanDetailInput[]
    updateMany?: ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentPlanDetailInput | ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentPlanDetailInput[]
    deleteMany?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
  }

  export type ProductUpdateOneRequiredWithoutShipmentPlanDetailNestedInput = {
    create?: XOR<ProductCreateWithoutShipmentPlanDetailInput, ProductUncheckedCreateWithoutShipmentPlanDetailInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShipmentPlanDetailInput
    upsert?: ProductUpsertWithoutShipmentPlanDetailInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutShipmentPlanDetailInput, ProductUpdateWithoutShipmentPlanDetailInput>, ProductUncheckedUpdateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentPlanUpdateOneRequiredWithoutShipmentPlanDetailNestedInput = {
    create?: XOR<ShipmentPlanCreateWithoutShipmentPlanDetailInput, ShipmentPlanUncheckedCreateWithoutShipmentPlanDetailInput>
    connectOrCreate?: ShipmentPlanCreateOrConnectWithoutShipmentPlanDetailInput
    upsert?: ShipmentPlanUpsertWithoutShipmentPlanDetailInput
    connect?: ShipmentPlanWhereUniqueInput
    update?: XOR<XOR<ShipmentPlanUpdateToOneWithWhereWithoutShipmentPlanDetailInput, ShipmentPlanUpdateWithoutShipmentPlanDetailInput>, ShipmentPlanUncheckedUpdateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentPlanDetailNestedInput = {
    create?: XOR<ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput> | ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput[] | ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput[]
    connectOrCreate?: ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput | ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput[]
    upsert?: ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentPlanDetailInput | ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentPlanDetailInput[]
    createMany?: ShipmentAchievementDetailCreateManyShipmentPlanDetailInputEnvelope
    set?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    disconnect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    delete?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    connect?: ShipmentAchievementDetailWhereUniqueInput | ShipmentAchievementDetailWhereUniqueInput[]
    update?: ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentPlanDetailInput | ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentPlanDetailInput[]
    updateMany?: ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentPlanDetailInput | ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentPlanDetailInput[]
    deleteMany?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutTreatmentAchievementInput = {
    create?: XOR<EmployeeCreateWithoutTreatmentAchievementInput, EmployeeUncheckedCreateWithoutTreatmentAchievementInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTreatmentAchievementInput
    connect?: EmployeeWhereUniqueInput
  }

  export type TreatmentAchievementDetailCreateNestedManyWithoutTreatmentAchievementInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput> | TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentAchievementInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentAchievementInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput> | TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentAchievementInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutTreatmentAchievementNestedInput = {
    create?: XOR<EmployeeCreateWithoutTreatmentAchievementInput, EmployeeUncheckedCreateWithoutTreatmentAchievementInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTreatmentAchievementInput
    upsert?: EmployeeUpsertWithoutTreatmentAchievementInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTreatmentAchievementInput, EmployeeUpdateWithoutTreatmentAchievementInput>, EmployeeUncheckedUpdateWithoutTreatmentAchievementInput>
  }

  export type TreatmentAchievementDetailUpdateManyWithoutTreatmentAchievementNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput> | TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentAchievementInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentAchievementInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentAchievementInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentAchievementInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentAchievementInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentAchievementInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentAchievementInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentAchievementNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput> | TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentAchievementInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentAchievementInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentAchievementInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentAchievementInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentAchievementInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentAchievementInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentAchievementInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    create?: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    connect?: ProductStockWhereUniqueInput
  }

  export type TreatmentAchievementCreateNestedOneWithoutTreatmentAchievementDetailInput = {
    create?: XOR<TreatmentAchievementCreateWithoutTreatmentAchievementDetailInput, TreatmentAchievementUncheckedCreateWithoutTreatmentAchievementDetailInput>
    connectOrCreate?: TreatmentAchievementCreateOrConnectWithoutTreatmentAchievementDetailInput
    connect?: TreatmentAchievementWhereUniqueInput
  }

  export type TreatmentPlanDetailCreateNestedOneWithoutTreatmentAchievementDetailInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentAchievementDetailInput>
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutTreatmentAchievementDetailInput
    connect?: TreatmentPlanDetailWhereUniqueInput
  }

  export type ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    create?: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    connect?: ProductStockWhereUniqueInput
  }

  export type ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput = {
    create?: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    upsert?: ProductStockUpsertWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    connect?: ProductStockWhereUniqueInput
    update?: XOR<XOR<ProductStockUpdateToOneWithWhereWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>, ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput = {
    create?: XOR<TreatmentAchievementCreateWithoutTreatmentAchievementDetailInput, TreatmentAchievementUncheckedCreateWithoutTreatmentAchievementDetailInput>
    connectOrCreate?: TreatmentAchievementCreateOrConnectWithoutTreatmentAchievementDetailInput
    upsert?: TreatmentAchievementUpsertWithoutTreatmentAchievementDetailInput
    connect?: TreatmentAchievementWhereUniqueInput
    update?: XOR<XOR<TreatmentAchievementUpdateToOneWithWhereWithoutTreatmentAchievementDetailInput, TreatmentAchievementUpdateWithoutTreatmentAchievementDetailInput>, TreatmentAchievementUncheckedUpdateWithoutTreatmentAchievementDetailInput>
  }

  export type TreatmentPlanDetailUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentAchievementDetailInput>
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutTreatmentAchievementDetailInput
    upsert?: TreatmentPlanDetailUpsertWithoutTreatmentAchievementDetailInput
    connect?: TreatmentPlanDetailWhereUniqueInput
    update?: XOR<XOR<TreatmentPlanDetailUpdateToOneWithWhereWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUpdateWithoutTreatmentAchievementDetailInput>, TreatmentPlanDetailUncheckedUpdateWithoutTreatmentAchievementDetailInput>
  }

  export type ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput = {
    create?: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    upsert?: ProductStockUpsertWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    connect?: ProductStockWhereUniqueInput
    update?: XOR<XOR<ProductStockUpdateToOneWithWhereWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>, ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type TreatmentPlanDetailCreateNestedManyWithoutTreatmentPlanInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput> | TreatmentPlanDetailCreateWithoutTreatmentPlanInput[] | TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput | TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput[]
    createMany?: TreatmentPlanDetailCreateManyTreatmentPlanInputEnvelope
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
  }

  export type TreatmentPlanDetailUncheckedCreateNestedManyWithoutTreatmentPlanInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput> | TreatmentPlanDetailCreateWithoutTreatmentPlanInput[] | TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput | TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput[]
    createMany?: TreatmentPlanDetailCreateManyTreatmentPlanInputEnvelope
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
  }

  export type TreatmentPlanDetailUpdateManyWithoutTreatmentPlanNestedInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput> | TreatmentPlanDetailCreateWithoutTreatmentPlanInput[] | TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput | TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput[]
    upsert?: TreatmentPlanDetailUpsertWithWhereUniqueWithoutTreatmentPlanInput | TreatmentPlanDetailUpsertWithWhereUniqueWithoutTreatmentPlanInput[]
    createMany?: TreatmentPlanDetailCreateManyTreatmentPlanInputEnvelope
    set?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    disconnect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    delete?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    update?: TreatmentPlanDetailUpdateWithWhereUniqueWithoutTreatmentPlanInput | TreatmentPlanDetailUpdateWithWhereUniqueWithoutTreatmentPlanInput[]
    updateMany?: TreatmentPlanDetailUpdateManyWithWhereWithoutTreatmentPlanInput | TreatmentPlanDetailUpdateManyWithWhereWithoutTreatmentPlanInput[]
    deleteMany?: TreatmentPlanDetailScalarWhereInput | TreatmentPlanDetailScalarWhereInput[]
  }

  export type TreatmentPlanDetailUncheckedUpdateManyWithoutTreatmentPlanNestedInput = {
    create?: XOR<TreatmentPlanDetailCreateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput> | TreatmentPlanDetailCreateWithoutTreatmentPlanInput[] | TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput[]
    connectOrCreate?: TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput | TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput[]
    upsert?: TreatmentPlanDetailUpsertWithWhereUniqueWithoutTreatmentPlanInput | TreatmentPlanDetailUpsertWithWhereUniqueWithoutTreatmentPlanInput[]
    createMany?: TreatmentPlanDetailCreateManyTreatmentPlanInputEnvelope
    set?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    disconnect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    delete?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    connect?: TreatmentPlanDetailWhereUniqueInput | TreatmentPlanDetailWhereUniqueInput[]
    update?: TreatmentPlanDetailUpdateWithWhereUniqueWithoutTreatmentPlanInput | TreatmentPlanDetailUpdateWithWhereUniqueWithoutTreatmentPlanInput[]
    updateMany?: TreatmentPlanDetailUpdateManyWithWhereWithoutTreatmentPlanInput | TreatmentPlanDetailUpdateManyWithWhereWithoutTreatmentPlanInput[]
    deleteMany?: TreatmentPlanDetailScalarWhereInput | TreatmentPlanDetailScalarWhereInput[]
  }

  export type TreatmentAchievementDetailCreateNestedManyWithoutTreatmentPlanDetailInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput> | TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentPlanDetailInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type ProductStockCreateNestedOneWithoutTreatmentPlanDetailInput = {
    create?: XOR<ProductStockCreateWithoutTreatmentPlanDetailInput, ProductStockUncheckedCreateWithoutTreatmentPlanDetailInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutTreatmentPlanDetailInput
    connect?: ProductStockWhereUniqueInput
  }

  export type TreatmentPlanCreateNestedOneWithoutTreatmentPlanDetailInput = {
    create?: XOR<TreatmentPlanCreateWithoutTreatmentPlanDetailInput, TreatmentPlanUncheckedCreateWithoutTreatmentPlanDetailInput>
    connectOrCreate?: TreatmentPlanCreateOrConnectWithoutTreatmentPlanDetailInput
    connect?: TreatmentPlanWhereUniqueInput
  }

  export type TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentPlanDetailInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput> | TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentPlanDetailInputEnvelope
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
  }

  export type TreatmentAchievementDetailUpdateManyWithoutTreatmentPlanDetailNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput> | TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentPlanDetailInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentPlanDetailInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentPlanDetailInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentPlanDetailInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type ProductStockUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput = {
    create?: XOR<ProductStockCreateWithoutTreatmentPlanDetailInput, ProductStockUncheckedCreateWithoutTreatmentPlanDetailInput>
    connectOrCreate?: ProductStockCreateOrConnectWithoutTreatmentPlanDetailInput
    upsert?: ProductStockUpsertWithoutTreatmentPlanDetailInput
    connect?: ProductStockWhereUniqueInput
    update?: XOR<XOR<ProductStockUpdateToOneWithWhereWithoutTreatmentPlanDetailInput, ProductStockUpdateWithoutTreatmentPlanDetailInput>, ProductStockUncheckedUpdateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentPlanUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput = {
    create?: XOR<TreatmentPlanCreateWithoutTreatmentPlanDetailInput, TreatmentPlanUncheckedCreateWithoutTreatmentPlanDetailInput>
    connectOrCreate?: TreatmentPlanCreateOrConnectWithoutTreatmentPlanDetailInput
    upsert?: TreatmentPlanUpsertWithoutTreatmentPlanDetailInput
    connect?: TreatmentPlanWhereUniqueInput
    update?: XOR<XOR<TreatmentPlanUpdateToOneWithWhereWithoutTreatmentPlanDetailInput, TreatmentPlanUpdateWithoutTreatmentPlanDetailInput>, TreatmentPlanUncheckedUpdateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentPlanDetailNestedInput = {
    create?: XOR<TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput> | TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput[] | TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput[]
    connectOrCreate?: TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput[]
    upsert?: TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentPlanDetailInput[]
    createMany?: TreatmentAchievementDetailCreateManyTreatmentPlanDetailInputEnvelope
    set?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    disconnect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    delete?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    connect?: TreatmentAchievementDetailWhereUniqueInput | TreatmentAchievementDetailWhereUniqueInput[]
    update?: TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentPlanDetailInput[]
    updateMany?: TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentPlanDetailInput | TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentPlanDetailInput[]
    deleteMany?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
  }

  export type ProductStockCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type ProductStockUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutWarehouseInput | ProductStockUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutWarehouseInput | ProductStockUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutWarehouseInput | ProductStockUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput> | ProductStockCreateWithoutWarehouseInput[] | ProductStockUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutWarehouseInput | ProductStockCreateOrConnectWithoutWarehouseInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutWarehouseInput | ProductStockUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ProductStockCreateManyWarehouseInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutWarehouseInput | ProductStockUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutWarehouseInput | ProductStockUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShipmentPlanCreateWithoutCustomerInput = {
    ShipmentPlanDetail?: ShipmentPlanDetailCreateNestedManyWithoutShipmentPlanInput
  }

  export type ShipmentPlanUncheckedCreateWithoutCustomerInput = {
    Id?: number
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedCreateNestedManyWithoutShipmentPlanInput
  }

  export type ShipmentPlanCreateOrConnectWithoutCustomerInput = {
    where: ShipmentPlanWhereUniqueInput
    create: XOR<ShipmentPlanCreateWithoutCustomerInput, ShipmentPlanUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentPlanCreateManyCustomerInputEnvelope = {
    data: ShipmentPlanCreateManyCustomerInput | ShipmentPlanCreateManyCustomerInput[]
  }

  export type ShipmentPlanUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentPlanWhereUniqueInput
    update: XOR<ShipmentPlanUpdateWithoutCustomerInput, ShipmentPlanUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShipmentPlanCreateWithoutCustomerInput, ShipmentPlanUncheckedCreateWithoutCustomerInput>
  }

  export type ShipmentPlanUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShipmentPlanWhereUniqueInput
    data: XOR<ShipmentPlanUpdateWithoutCustomerInput, ShipmentPlanUncheckedUpdateWithoutCustomerInput>
  }

  export type ShipmentPlanUpdateManyWithWhereWithoutCustomerInput = {
    where: ShipmentPlanScalarWhereInput
    data: XOR<ShipmentPlanUpdateManyMutationInput, ShipmentPlanUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShipmentPlanScalarWhereInput = {
    AND?: ShipmentPlanScalarWhereInput | ShipmentPlanScalarWhereInput[]
    OR?: ShipmentPlanScalarWhereInput[]
    NOT?: ShipmentPlanScalarWhereInput | ShipmentPlanScalarWhereInput[]
    Id?: IntFilter<"ShipmentPlan"> | number
    CustomerId?: IntFilter<"ShipmentPlan"> | number
  }

  export type ReceivingAchievementCreateWithoutEmployeeInput = {
    ReceivedAt?: Date | string
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutReceivingAchievementInput
  }

  export type ReceivingAchievementUncheckedCreateWithoutEmployeeInput = {
    Id?: number
    ReceivedAt?: Date | string
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutReceivingAchievementInput
  }

  export type ReceivingAchievementCreateOrConnectWithoutEmployeeInput = {
    where: ReceivingAchievementWhereUniqueInput
    create: XOR<ReceivingAchievementCreateWithoutEmployeeInput, ReceivingAchievementUncheckedCreateWithoutEmployeeInput>
  }

  export type ReceivingAchievementCreateManyEmployeeInputEnvelope = {
    data: ReceivingAchievementCreateManyEmployeeInput | ReceivingAchievementCreateManyEmployeeInput[]
  }

  export type ShipmentAchievementCreateWithoutEmployeeInput = {
    ShippedAt?: Date | string
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutShipmentAchievementInput
  }

  export type ShipmentAchievementUncheckedCreateWithoutEmployeeInput = {
    Id?: number
    ShippedAt?: Date | string
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentAchievementInput
  }

  export type ShipmentAchievementCreateOrConnectWithoutEmployeeInput = {
    where: ShipmentAchievementWhereUniqueInput
    create: XOR<ShipmentAchievementCreateWithoutEmployeeInput, ShipmentAchievementUncheckedCreateWithoutEmployeeInput>
  }

  export type ShipmentAchievementCreateManyEmployeeInputEnvelope = {
    data: ShipmentAchievementCreateManyEmployeeInput | ShipmentAchievementCreateManyEmployeeInput[]
  }

  export type TreatmentAchievementCreateWithoutEmployeeInput = {
    TreatedAt?: Date | string
    TreatmentAchievementDetail?: TreatmentAchievementDetailCreateNestedManyWithoutTreatmentAchievementInput
  }

  export type TreatmentAchievementUncheckedCreateWithoutEmployeeInput = {
    Id?: number
    TreatedAt?: Date | string
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentAchievementInput
  }

  export type TreatmentAchievementCreateOrConnectWithoutEmployeeInput = {
    where: TreatmentAchievementWhereUniqueInput
    create: XOR<TreatmentAchievementCreateWithoutEmployeeInput, TreatmentAchievementUncheckedCreateWithoutEmployeeInput>
  }

  export type TreatmentAchievementCreateManyEmployeeInputEnvelope = {
    data: TreatmentAchievementCreateManyEmployeeInput | TreatmentAchievementCreateManyEmployeeInput[]
  }

  export type ReceivingAchievementUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ReceivingAchievementWhereUniqueInput
    update: XOR<ReceivingAchievementUpdateWithoutEmployeeInput, ReceivingAchievementUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ReceivingAchievementCreateWithoutEmployeeInput, ReceivingAchievementUncheckedCreateWithoutEmployeeInput>
  }

  export type ReceivingAchievementUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ReceivingAchievementWhereUniqueInput
    data: XOR<ReceivingAchievementUpdateWithoutEmployeeInput, ReceivingAchievementUncheckedUpdateWithoutEmployeeInput>
  }

  export type ReceivingAchievementUpdateManyWithWhereWithoutEmployeeInput = {
    where: ReceivingAchievementScalarWhereInput
    data: XOR<ReceivingAchievementUpdateManyMutationInput, ReceivingAchievementUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ReceivingAchievementScalarWhereInput = {
    AND?: ReceivingAchievementScalarWhereInput | ReceivingAchievementScalarWhereInput[]
    OR?: ReceivingAchievementScalarWhereInput[]
    NOT?: ReceivingAchievementScalarWhereInput | ReceivingAchievementScalarWhereInput[]
    Id?: IntFilter<"ReceivingAchievement"> | number
    ReceivedAt?: DateTimeFilter<"ReceivingAchievement"> | Date | string
    EmployeeId?: IntFilter<"ReceivingAchievement"> | number
  }

  export type ShipmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ShipmentAchievementWhereUniqueInput
    update: XOR<ShipmentAchievementUpdateWithoutEmployeeInput, ShipmentAchievementUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ShipmentAchievementCreateWithoutEmployeeInput, ShipmentAchievementUncheckedCreateWithoutEmployeeInput>
  }

  export type ShipmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ShipmentAchievementWhereUniqueInput
    data: XOR<ShipmentAchievementUpdateWithoutEmployeeInput, ShipmentAchievementUncheckedUpdateWithoutEmployeeInput>
  }

  export type ShipmentAchievementUpdateManyWithWhereWithoutEmployeeInput = {
    where: ShipmentAchievementScalarWhereInput
    data: XOR<ShipmentAchievementUpdateManyMutationInput, ShipmentAchievementUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ShipmentAchievementScalarWhereInput = {
    AND?: ShipmentAchievementScalarWhereInput | ShipmentAchievementScalarWhereInput[]
    OR?: ShipmentAchievementScalarWhereInput[]
    NOT?: ShipmentAchievementScalarWhereInput | ShipmentAchievementScalarWhereInput[]
    Id?: IntFilter<"ShipmentAchievement"> | number
    ShippedAt?: DateTimeFilter<"ShipmentAchievement"> | Date | string
    EmployeeId?: IntFilter<"ShipmentAchievement"> | number
  }

  export type TreatmentAchievementUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: TreatmentAchievementWhereUniqueInput
    update: XOR<TreatmentAchievementUpdateWithoutEmployeeInput, TreatmentAchievementUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TreatmentAchievementCreateWithoutEmployeeInput, TreatmentAchievementUncheckedCreateWithoutEmployeeInput>
  }

  export type TreatmentAchievementUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: TreatmentAchievementWhereUniqueInput
    data: XOR<TreatmentAchievementUpdateWithoutEmployeeInput, TreatmentAchievementUncheckedUpdateWithoutEmployeeInput>
  }

  export type TreatmentAchievementUpdateManyWithWhereWithoutEmployeeInput = {
    where: TreatmentAchievementScalarWhereInput
    data: XOR<TreatmentAchievementUpdateManyMutationInput, TreatmentAchievementUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type TreatmentAchievementScalarWhereInput = {
    AND?: TreatmentAchievementScalarWhereInput | TreatmentAchievementScalarWhereInput[]
    OR?: TreatmentAchievementScalarWhereInput[]
    NOT?: TreatmentAchievementScalarWhereInput | TreatmentAchievementScalarWhereInput[]
    Id?: IntFilter<"TreatmentAchievement"> | number
    TreatedAt?: DateTimeFilter<"TreatmentAchievement"> | Date | string
    EmployeeId?: IntFilter<"TreatmentAchievement"> | number
  }

  export type ProductStockCreateWithoutProductInput = {
    Used?: number
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutProductInput = {
    Id?: number
    WarehouseId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput>
  }

  export type ProductStockCreateManyProductInputEnvelope = {
    data: ProductStockCreateManyProductInput | ProductStockCreateManyProductInput[]
  }

  export type ShipmentPlanDetailCreateWithoutProductInput = {
    Quantity: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutShipmentPlanDetailInput
    ShipmentPlan: ShipmentPlanCreateNestedOneWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailUncheckedCreateWithoutProductInput = {
    Id?: number
    ShipmentPlanId: number
    Quantity: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailCreateOrConnectWithoutProductInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    create: XOR<ShipmentPlanDetailCreateWithoutProductInput, ShipmentPlanDetailUncheckedCreateWithoutProductInput>
  }

  export type ShipmentPlanDetailCreateManyProductInputEnvelope = {
    data: ShipmentPlanDetailCreateManyProductInput | ShipmentPlanDetailCreateManyProductInput[]
  }

  export type ProductStockUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutProductInput, ProductStockUncheckedUpdateWithoutProductInput>
    create: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutProductInput, ProductStockUncheckedUpdateWithoutProductInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutProductInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductStockScalarWhereInput = {
    AND?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    OR?: ProductStockScalarWhereInput[]
    NOT?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    Id?: IntFilter<"ProductStock"> | number
    ProductId?: IntFilter<"ProductStock"> | number
    WarehouseId?: IntFilter<"ProductStock"> | number
    Used?: IntFilter<"ProductStock"> | number
  }

  export type ShipmentPlanDetailUpsertWithWhereUniqueWithoutProductInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    update: XOR<ShipmentPlanDetailUpdateWithoutProductInput, ShipmentPlanDetailUncheckedUpdateWithoutProductInput>
    create: XOR<ShipmentPlanDetailCreateWithoutProductInput, ShipmentPlanDetailUncheckedCreateWithoutProductInput>
  }

  export type ShipmentPlanDetailUpdateWithWhereUniqueWithoutProductInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    data: XOR<ShipmentPlanDetailUpdateWithoutProductInput, ShipmentPlanDetailUncheckedUpdateWithoutProductInput>
  }

  export type ShipmentPlanDetailUpdateManyWithWhereWithoutProductInput = {
    where: ShipmentPlanDetailScalarWhereInput
    data: XOR<ShipmentPlanDetailUpdateManyMutationInput, ShipmentPlanDetailUncheckedUpdateManyWithoutProductInput>
  }

  export type ShipmentPlanDetailScalarWhereInput = {
    AND?: ShipmentPlanDetailScalarWhereInput | ShipmentPlanDetailScalarWhereInput[]
    OR?: ShipmentPlanDetailScalarWhereInput[]
    NOT?: ShipmentPlanDetailScalarWhereInput | ShipmentPlanDetailScalarWhereInput[]
    Id?: IntFilter<"ShipmentPlanDetail"> | number
    ShipmentPlanId?: IntFilter<"ShipmentPlanDetail"> | number
    ProductId?: IntFilter<"ShipmentPlanDetail"> | number
    Quantity?: IntFilter<"ShipmentPlanDetail"> | number
  }

  export type ProductCreateWithoutProductStockInput = {
    Name: string
    ShipmentPlanDetail?: ShipmentPlanDetailCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductStockInput = {
    Id?: number
    Name: string
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductStockInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductStockInput, ProductUncheckedCreateWithoutProductStockInput>
  }

  export type WarehouseCreateWithoutProductStockInput = {
    Name: string
  }

  export type WarehouseUncheckedCreateWithoutProductStockInput = {
    Id?: number
    Name: string
  }

  export type WarehouseCreateOrConnectWithoutProductStockInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutProductStockInput, WarehouseUncheckedCreateWithoutProductStockInput>
  }

  export type ReceivingAchievementDetailCreateWithoutProductStockInput = {
    ReceivingAchievement: ReceivingAchievementCreateNestedOneWithoutReceivingAchievementDetailInput
  }

  export type ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput = {
    Id?: number
    ReceivingAchievementId: number
  }

  export type ReceivingAchievementDetailCreateOrConnectWithoutProductStockInput = {
    where: ReceivingAchievementDetailWhereUniqueInput
    create: XOR<ReceivingAchievementDetailCreateWithoutProductStockInput, ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput>
  }

  export type ReceivingAchievementDetailCreateManyProductStockInputEnvelope = {
    data: ReceivingAchievementDetailCreateManyProductStockInput | ReceivingAchievementDetailCreateManyProductStockInput[]
  }

  export type ShipmentAchievementDetailCreateWithoutProductStockInput = {
    ShipmentAchievement: ShipmentAchievementCreateNestedOneWithoutShipmentAchievementDetailInput
    ShipmentPlanDetail: ShipmentPlanDetailCreateNestedOneWithoutShipmentAchievementDetailInput
  }

  export type ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput = {
    Id?: number
    ShipmentAchievementId: number
    ShipmentPlanDetailId: number
  }

  export type ShipmentAchievementDetailCreateOrConnectWithoutProductStockInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    create: XOR<ShipmentAchievementDetailCreateWithoutProductStockInput, ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput>
  }

  export type ShipmentAchievementDetailCreateManyProductStockInputEnvelope = {
    data: ShipmentAchievementDetailCreateManyProductStockInput | ShipmentAchievementDetailCreateManyProductStockInput[]
  }

  export type TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    TreatmentAchievement: TreatmentAchievementCreateNestedOneWithoutTreatmentAchievementDetailInput
    TreatmentPlanDetail: TreatmentPlanDetailCreateNestedOneWithoutTreatmentAchievementDetailInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
  }

  export type TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Id?: number
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
  }

  export type TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    create: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInputEnvelope = {
    data: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput[]
  }

  export type TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievement: TreatmentAchievementCreateNestedOneWithoutTreatmentAchievementDetailInput
    TreatmentPlanDetail: TreatmentPlanDetailCreateNestedOneWithoutTreatmentAchievementDetailInput
  }

  export type TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Id?: number
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailCreateOrConnectWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    create: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInputEnvelope = {
    data: TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput | TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput[]
  }

  export type TreatmentPlanDetailCreateWithoutProductStockInput = {
    Quantity: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailCreateNestedManyWithoutTreatmentPlanDetailInput
    TreatmentPlan: TreatmentPlanCreateNestedOneWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailUncheckedCreateWithoutProductStockInput = {
    Id?: number
    TreatmentPlanId: number
    Quantity: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailCreateOrConnectWithoutProductStockInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    create: XOR<TreatmentPlanDetailCreateWithoutProductStockInput, TreatmentPlanDetailUncheckedCreateWithoutProductStockInput>
  }

  export type TreatmentPlanDetailCreateManyProductStockInputEnvelope = {
    data: TreatmentPlanDetailCreateManyProductStockInput | TreatmentPlanDetailCreateManyProductStockInput[]
  }

  export type ProductUpsertWithoutProductStockInput = {
    update: XOR<ProductUpdateWithoutProductStockInput, ProductUncheckedUpdateWithoutProductStockInput>
    create: XOR<ProductCreateWithoutProductStockInput, ProductUncheckedCreateWithoutProductStockInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductStockInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductStockInput, ProductUncheckedUpdateWithoutProductStockInput>
  }

  export type ProductUpdateWithoutProductStockInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WarehouseUpsertWithoutProductStockInput = {
    update: XOR<WarehouseUpdateWithoutProductStockInput, WarehouseUncheckedUpdateWithoutProductStockInput>
    create: XOR<WarehouseCreateWithoutProductStockInput, WarehouseUncheckedCreateWithoutProductStockInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutProductStockInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutProductStockInput, WarehouseUncheckedUpdateWithoutProductStockInput>
  }

  export type WarehouseUpdateWithoutProductStockInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type ReceivingAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput = {
    where: ReceivingAchievementDetailWhereUniqueInput
    update: XOR<ReceivingAchievementDetailUpdateWithoutProductStockInput, ReceivingAchievementDetailUncheckedUpdateWithoutProductStockInput>
    create: XOR<ReceivingAchievementDetailCreateWithoutProductStockInput, ReceivingAchievementDetailUncheckedCreateWithoutProductStockInput>
  }

  export type ReceivingAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput = {
    where: ReceivingAchievementDetailWhereUniqueInput
    data: XOR<ReceivingAchievementDetailUpdateWithoutProductStockInput, ReceivingAchievementDetailUncheckedUpdateWithoutProductStockInput>
  }

  export type ReceivingAchievementDetailUpdateManyWithWhereWithoutProductStockInput = {
    where: ReceivingAchievementDetailScalarWhereInput
    data: XOR<ReceivingAchievementDetailUpdateManyMutationInput, ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockInput>
  }

  export type ReceivingAchievementDetailScalarWhereInput = {
    AND?: ReceivingAchievementDetailScalarWhereInput | ReceivingAchievementDetailScalarWhereInput[]
    OR?: ReceivingAchievementDetailScalarWhereInput[]
    NOT?: ReceivingAchievementDetailScalarWhereInput | ReceivingAchievementDetailScalarWhereInput[]
    Id?: IntFilter<"ReceivingAchievementDetail"> | number
    ReceivingAchievementId?: IntFilter<"ReceivingAchievementDetail"> | number
    ProductStockId?: IntFilter<"ReceivingAchievementDetail"> | number
  }

  export type ShipmentAchievementDetailUpsertWithWhereUniqueWithoutProductStockInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    update: XOR<ShipmentAchievementDetailUpdateWithoutProductStockInput, ShipmentAchievementDetailUncheckedUpdateWithoutProductStockInput>
    create: XOR<ShipmentAchievementDetailCreateWithoutProductStockInput, ShipmentAchievementDetailUncheckedCreateWithoutProductStockInput>
  }

  export type ShipmentAchievementDetailUpdateWithWhereUniqueWithoutProductStockInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    data: XOR<ShipmentAchievementDetailUpdateWithoutProductStockInput, ShipmentAchievementDetailUncheckedUpdateWithoutProductStockInput>
  }

  export type ShipmentAchievementDetailUpdateManyWithWhereWithoutProductStockInput = {
    where: ShipmentAchievementDetailScalarWhereInput
    data: XOR<ShipmentAchievementDetailUpdateManyMutationInput, ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockInput>
  }

  export type ShipmentAchievementDetailScalarWhereInput = {
    AND?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
    OR?: ShipmentAchievementDetailScalarWhereInput[]
    NOT?: ShipmentAchievementDetailScalarWhereInput | ShipmentAchievementDetailScalarWhereInput[]
    Id?: IntFilter<"ShipmentAchievementDetail"> | number
    ShipmentAchievementId?: IntFilter<"ShipmentAchievementDetail"> | number
    ProductStockId?: IntFilter<"ShipmentAchievementDetail"> | number
    ShipmentPlanDetailId?: IntFilter<"ShipmentAchievementDetail"> | number
  }

  export type TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    update: XOR<TreatmentAchievementDetailUpdateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedUpdateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
    create: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    data: XOR<TreatmentAchievementDetailUpdateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedUpdateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailScalarWhereInput
    data: XOR<TreatmentAchievementDetailUpdateManyMutationInput, TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailScalarWhereInput = {
    AND?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
    OR?: TreatmentAchievementDetailScalarWhereInput[]
    NOT?: TreatmentAchievementDetailScalarWhereInput | TreatmentAchievementDetailScalarWhereInput[]
    Id?: IntFilter<"TreatmentAchievementDetail"> | number
    TreatmentAchievementId?: IntFilter<"TreatmentAchievementDetail"> | number
    TreatmentPlanDetailId?: IntFilter<"TreatmentAchievementDetail"> | number
    UsedProductStockId?: IntFilter<"TreatmentAchievementDetail"> | number
    ProducedProductStockId?: IntFilter<"TreatmentAchievementDetail"> | number
  }

  export type TreatmentAchievementDetailUpsertWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    update: XOR<TreatmentAchievementDetailUpdateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedUpdateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
    create: XOR<TreatmentAchievementDetailCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedCreateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailUpdateWithWhereUniqueWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    data: XOR<TreatmentAchievementDetailUpdateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, TreatmentAchievementDetailUncheckedUpdateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementDetailUpdateManyWithWhereWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    where: TreatmentAchievementDetailScalarWhereInput
    data: XOR<TreatmentAchievementDetailUpdateManyMutationInput, TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type TreatmentPlanDetailUpsertWithWhereUniqueWithoutProductStockInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    update: XOR<TreatmentPlanDetailUpdateWithoutProductStockInput, TreatmentPlanDetailUncheckedUpdateWithoutProductStockInput>
    create: XOR<TreatmentPlanDetailCreateWithoutProductStockInput, TreatmentPlanDetailUncheckedCreateWithoutProductStockInput>
  }

  export type TreatmentPlanDetailUpdateWithWhereUniqueWithoutProductStockInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    data: XOR<TreatmentPlanDetailUpdateWithoutProductStockInput, TreatmentPlanDetailUncheckedUpdateWithoutProductStockInput>
  }

  export type TreatmentPlanDetailUpdateManyWithWhereWithoutProductStockInput = {
    where: TreatmentPlanDetailScalarWhereInput
    data: XOR<TreatmentPlanDetailUpdateManyMutationInput, TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockInput>
  }

  export type TreatmentPlanDetailScalarWhereInput = {
    AND?: TreatmentPlanDetailScalarWhereInput | TreatmentPlanDetailScalarWhereInput[]
    OR?: TreatmentPlanDetailScalarWhereInput[]
    NOT?: TreatmentPlanDetailScalarWhereInput | TreatmentPlanDetailScalarWhereInput[]
    Id?: IntFilter<"TreatmentPlanDetail"> | number
    TreatmentPlanId?: IntFilter<"TreatmentPlanDetail"> | number
    ProductStockId?: IntFilter<"TreatmentPlanDetail"> | number
    Quantity?: IntFilter<"TreatmentPlanDetail"> | number
  }

  export type EmployeeCreateWithoutReceivingAchievementInput = {
    Name: string
    ShipmentAchievement?: ShipmentAchievementCreateNestedManyWithoutEmployeeInput
    TreatmentAchievement?: TreatmentAchievementCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutReceivingAchievementInput = {
    Id?: number
    Name: string
    ShipmentAchievement?: ShipmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput
    TreatmentAchievement?: TreatmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutReceivingAchievementInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutReceivingAchievementInput, EmployeeUncheckedCreateWithoutReceivingAchievementInput>
  }

  export type ReceivingAchievementDetailCreateWithoutReceivingAchievementInput = {
    ProductStock: ProductStockCreateNestedOneWithoutReceivingAchievementDetailInput
  }

  export type ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput = {
    Id?: number
    ProductStockId: number
  }

  export type ReceivingAchievementDetailCreateOrConnectWithoutReceivingAchievementInput = {
    where: ReceivingAchievementDetailWhereUniqueInput
    create: XOR<ReceivingAchievementDetailCreateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput>
  }

  export type ReceivingAchievementDetailCreateManyReceivingAchievementInputEnvelope = {
    data: ReceivingAchievementDetailCreateManyReceivingAchievementInput | ReceivingAchievementDetailCreateManyReceivingAchievementInput[]
  }

  export type EmployeeUpsertWithoutReceivingAchievementInput = {
    update: XOR<EmployeeUpdateWithoutReceivingAchievementInput, EmployeeUncheckedUpdateWithoutReceivingAchievementInput>
    create: XOR<EmployeeCreateWithoutReceivingAchievementInput, EmployeeUncheckedCreateWithoutReceivingAchievementInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutReceivingAchievementInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutReceivingAchievementInput, EmployeeUncheckedUpdateWithoutReceivingAchievementInput>
  }

  export type EmployeeUpdateWithoutReceivingAchievementInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ShipmentAchievement?: ShipmentAchievementUpdateManyWithoutEmployeeNestedInput
    TreatmentAchievement?: TreatmentAchievementUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutReceivingAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ShipmentAchievement?: ShipmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
    TreatmentAchievement?: TreatmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ReceivingAchievementDetailUpsertWithWhereUniqueWithoutReceivingAchievementInput = {
    where: ReceivingAchievementDetailWhereUniqueInput
    update: XOR<ReceivingAchievementDetailUpdateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedUpdateWithoutReceivingAchievementInput>
    create: XOR<ReceivingAchievementDetailCreateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedCreateWithoutReceivingAchievementInput>
  }

  export type ReceivingAchievementDetailUpdateWithWhereUniqueWithoutReceivingAchievementInput = {
    where: ReceivingAchievementDetailWhereUniqueInput
    data: XOR<ReceivingAchievementDetailUpdateWithoutReceivingAchievementInput, ReceivingAchievementDetailUncheckedUpdateWithoutReceivingAchievementInput>
  }

  export type ReceivingAchievementDetailUpdateManyWithWhereWithoutReceivingAchievementInput = {
    where: ReceivingAchievementDetailScalarWhereInput
    data: XOR<ReceivingAchievementDetailUpdateManyMutationInput, ReceivingAchievementDetailUncheckedUpdateManyWithoutReceivingAchievementInput>
  }

  export type ProductStockCreateWithoutReceivingAchievementDetailInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutReceivingAchievementDetailInput = {
    Id?: number
    ProductId: number
    WarehouseId: number
    Used?: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutReceivingAchievementDetailInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutReceivingAchievementDetailInput, ProductStockUncheckedCreateWithoutReceivingAchievementDetailInput>
  }

  export type ReceivingAchievementCreateWithoutReceivingAchievementDetailInput = {
    ReceivedAt?: Date | string
    Employee: EmployeeCreateNestedOneWithoutReceivingAchievementInput
  }

  export type ReceivingAchievementUncheckedCreateWithoutReceivingAchievementDetailInput = {
    Id?: number
    ReceivedAt?: Date | string
    EmployeeId: number
  }

  export type ReceivingAchievementCreateOrConnectWithoutReceivingAchievementDetailInput = {
    where: ReceivingAchievementWhereUniqueInput
    create: XOR<ReceivingAchievementCreateWithoutReceivingAchievementDetailInput, ReceivingAchievementUncheckedCreateWithoutReceivingAchievementDetailInput>
  }

  export type ProductStockUpsertWithoutReceivingAchievementDetailInput = {
    update: XOR<ProductStockUpdateWithoutReceivingAchievementDetailInput, ProductStockUncheckedUpdateWithoutReceivingAchievementDetailInput>
    create: XOR<ProductStockCreateWithoutReceivingAchievementDetailInput, ProductStockUncheckedCreateWithoutReceivingAchievementDetailInput>
    where?: ProductStockWhereInput
  }

  export type ProductStockUpdateToOneWithWhereWithoutReceivingAchievementDetailInput = {
    where?: ProductStockWhereInput
    data: XOR<ProductStockUpdateWithoutReceivingAchievementDetailInput, ProductStockUncheckedUpdateWithoutReceivingAchievementDetailInput>
  }

  export type ProductStockUpdateWithoutReceivingAchievementDetailInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutReceivingAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type ReceivingAchievementUpsertWithoutReceivingAchievementDetailInput = {
    update: XOR<ReceivingAchievementUpdateWithoutReceivingAchievementDetailInput, ReceivingAchievementUncheckedUpdateWithoutReceivingAchievementDetailInput>
    create: XOR<ReceivingAchievementCreateWithoutReceivingAchievementDetailInput, ReceivingAchievementUncheckedCreateWithoutReceivingAchievementDetailInput>
    where?: ReceivingAchievementWhereInput
  }

  export type ReceivingAchievementUpdateToOneWithWhereWithoutReceivingAchievementDetailInput = {
    where?: ReceivingAchievementWhereInput
    data: XOR<ReceivingAchievementUpdateWithoutReceivingAchievementDetailInput, ReceivingAchievementUncheckedUpdateWithoutReceivingAchievementDetailInput>
  }

  export type ReceivingAchievementUpdateWithoutReceivingAchievementDetailInput = {
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateOneRequiredWithoutReceivingAchievementNestedInput
  }

  export type ReceivingAchievementUncheckedUpdateWithoutReceivingAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateWithoutShipmentAchievementInput = {
    Name: string
    ReceivingAchievement?: ReceivingAchievementCreateNestedManyWithoutEmployeeInput
    TreatmentAchievement?: TreatmentAchievementCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutShipmentAchievementInput = {
    Id?: number
    Name: string
    ReceivingAchievement?: ReceivingAchievementUncheckedCreateNestedManyWithoutEmployeeInput
    TreatmentAchievement?: TreatmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutShipmentAchievementInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutShipmentAchievementInput, EmployeeUncheckedCreateWithoutShipmentAchievementInput>
  }

  export type ShipmentAchievementDetailCreateWithoutShipmentAchievementInput = {
    ProductStock: ProductStockCreateNestedOneWithoutShipmentAchievementDetailInput
    ShipmentPlanDetail: ShipmentPlanDetailCreateNestedOneWithoutShipmentAchievementDetailInput
  }

  export type ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput = {
    Id?: number
    ProductStockId: number
    ShipmentPlanDetailId: number
  }

  export type ShipmentAchievementDetailCreateOrConnectWithoutShipmentAchievementInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    create: XOR<ShipmentAchievementDetailCreateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput>
  }

  export type ShipmentAchievementDetailCreateManyShipmentAchievementInputEnvelope = {
    data: ShipmentAchievementDetailCreateManyShipmentAchievementInput | ShipmentAchievementDetailCreateManyShipmentAchievementInput[]
  }

  export type EmployeeUpsertWithoutShipmentAchievementInput = {
    update: XOR<EmployeeUpdateWithoutShipmentAchievementInput, EmployeeUncheckedUpdateWithoutShipmentAchievementInput>
    create: XOR<EmployeeCreateWithoutShipmentAchievementInput, EmployeeUncheckedCreateWithoutShipmentAchievementInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutShipmentAchievementInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutShipmentAchievementInput, EmployeeUncheckedUpdateWithoutShipmentAchievementInput>
  }

  export type EmployeeUpdateWithoutShipmentAchievementInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ReceivingAchievement?: ReceivingAchievementUpdateManyWithoutEmployeeNestedInput
    TreatmentAchievement?: TreatmentAchievementUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutShipmentAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ReceivingAchievement?: ReceivingAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
    TreatmentAchievement?: TreatmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentAchievementInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    update: XOR<ShipmentAchievementDetailUpdateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedUpdateWithoutShipmentAchievementInput>
    create: XOR<ShipmentAchievementDetailCreateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentAchievementInput>
  }

  export type ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentAchievementInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    data: XOR<ShipmentAchievementDetailUpdateWithoutShipmentAchievementInput, ShipmentAchievementDetailUncheckedUpdateWithoutShipmentAchievementInput>
  }

  export type ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentAchievementInput = {
    where: ShipmentAchievementDetailScalarWhereInput
    data: XOR<ShipmentAchievementDetailUpdateManyMutationInput, ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentAchievementInput>
  }

  export type ProductStockCreateWithoutShipmentAchievementDetailInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutShipmentAchievementDetailInput = {
    Id?: number
    ProductId: number
    WarehouseId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutShipmentAchievementDetailInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutShipmentAchievementDetailInput, ProductStockUncheckedCreateWithoutShipmentAchievementDetailInput>
  }

  export type ShipmentAchievementCreateWithoutShipmentAchievementDetailInput = {
    ShippedAt?: Date | string
    Employee: EmployeeCreateNestedOneWithoutShipmentAchievementInput
  }

  export type ShipmentAchievementUncheckedCreateWithoutShipmentAchievementDetailInput = {
    Id?: number
    ShippedAt?: Date | string
    EmployeeId: number
  }

  export type ShipmentAchievementCreateOrConnectWithoutShipmentAchievementDetailInput = {
    where: ShipmentAchievementWhereUniqueInput
    create: XOR<ShipmentAchievementCreateWithoutShipmentAchievementDetailInput, ShipmentAchievementUncheckedCreateWithoutShipmentAchievementDetailInput>
  }

  export type ShipmentPlanDetailCreateWithoutShipmentAchievementDetailInput = {
    Quantity: number
    Product: ProductCreateNestedOneWithoutShipmentPlanDetailInput
    ShipmentPlan: ShipmentPlanCreateNestedOneWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailUncheckedCreateWithoutShipmentAchievementDetailInput = {
    Id?: number
    ShipmentPlanId: number
    ProductId: number
    Quantity: number
  }

  export type ShipmentPlanDetailCreateOrConnectWithoutShipmentAchievementDetailInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    create: XOR<ShipmentPlanDetailCreateWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentAchievementDetailInput>
  }

  export type ProductStockUpsertWithoutShipmentAchievementDetailInput = {
    update: XOR<ProductStockUpdateWithoutShipmentAchievementDetailInput, ProductStockUncheckedUpdateWithoutShipmentAchievementDetailInput>
    create: XOR<ProductStockCreateWithoutShipmentAchievementDetailInput, ProductStockUncheckedCreateWithoutShipmentAchievementDetailInput>
    where?: ProductStockWhereInput
  }

  export type ProductStockUpdateToOneWithWhereWithoutShipmentAchievementDetailInput = {
    where?: ProductStockWhereInput
    data: XOR<ProductStockUpdateWithoutShipmentAchievementDetailInput, ProductStockUncheckedUpdateWithoutShipmentAchievementDetailInput>
  }

  export type ProductStockUpdateWithoutShipmentAchievementDetailInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutShipmentAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type ShipmentAchievementUpsertWithoutShipmentAchievementDetailInput = {
    update: XOR<ShipmentAchievementUpdateWithoutShipmentAchievementDetailInput, ShipmentAchievementUncheckedUpdateWithoutShipmentAchievementDetailInput>
    create: XOR<ShipmentAchievementCreateWithoutShipmentAchievementDetailInput, ShipmentAchievementUncheckedCreateWithoutShipmentAchievementDetailInput>
    where?: ShipmentAchievementWhereInput
  }

  export type ShipmentAchievementUpdateToOneWithWhereWithoutShipmentAchievementDetailInput = {
    where?: ShipmentAchievementWhereInput
    data: XOR<ShipmentAchievementUpdateWithoutShipmentAchievementDetailInput, ShipmentAchievementUncheckedUpdateWithoutShipmentAchievementDetailInput>
  }

  export type ShipmentAchievementUpdateWithoutShipmentAchievementDetailInput = {
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateOneRequiredWithoutShipmentAchievementNestedInput
  }

  export type ShipmentAchievementUncheckedUpdateWithoutShipmentAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentPlanDetailUpsertWithoutShipmentAchievementDetailInput = {
    update: XOR<ShipmentPlanDetailUpdateWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUncheckedUpdateWithoutShipmentAchievementDetailInput>
    create: XOR<ShipmentPlanDetailCreateWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentAchievementDetailInput>
    where?: ShipmentPlanDetailWhereInput
  }

  export type ShipmentPlanDetailUpdateToOneWithWhereWithoutShipmentAchievementDetailInput = {
    where?: ShipmentPlanDetailWhereInput
    data: XOR<ShipmentPlanDetailUpdateWithoutShipmentAchievementDetailInput, ShipmentPlanDetailUncheckedUpdateWithoutShipmentAchievementDetailInput>
  }

  export type ShipmentPlanDetailUpdateWithoutShipmentAchievementDetailInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutShipmentPlanDetailNestedInput
    ShipmentPlan?: ShipmentPlanUpdateOneRequiredWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailUncheckedUpdateWithoutShipmentAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentPlanId?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateWithoutShipmentPlanInput = {
    Name: string
    Address: string
    Email: string
  }

  export type CustomerUncheckedCreateWithoutShipmentPlanInput = {
    Id?: number
    Name: string
    Address: string
    Email: string
  }

  export type CustomerCreateOrConnectWithoutShipmentPlanInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShipmentPlanInput, CustomerUncheckedCreateWithoutShipmentPlanInput>
  }

  export type ShipmentPlanDetailCreateWithoutShipmentPlanInput = {
    Quantity: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutShipmentPlanDetailInput
    Product: ProductCreateNestedOneWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput = {
    Id?: number
    ProductId: number
    Quantity: number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutShipmentPlanDetailInput
  }

  export type ShipmentPlanDetailCreateOrConnectWithoutShipmentPlanInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    create: XOR<ShipmentPlanDetailCreateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput>
  }

  export type ShipmentPlanDetailCreateManyShipmentPlanInputEnvelope = {
    data: ShipmentPlanDetailCreateManyShipmentPlanInput | ShipmentPlanDetailCreateManyShipmentPlanInput[]
  }

  export type CustomerUpsertWithoutShipmentPlanInput = {
    update: XOR<CustomerUpdateWithoutShipmentPlanInput, CustomerUncheckedUpdateWithoutShipmentPlanInput>
    create: XOR<CustomerCreateWithoutShipmentPlanInput, CustomerUncheckedCreateWithoutShipmentPlanInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutShipmentPlanInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutShipmentPlanInput, CustomerUncheckedUpdateWithoutShipmentPlanInput>
  }

  export type CustomerUpdateWithoutShipmentPlanInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutShipmentPlanInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Address?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentPlanDetailUpsertWithWhereUniqueWithoutShipmentPlanInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    update: XOR<ShipmentPlanDetailUpdateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedUpdateWithoutShipmentPlanInput>
    create: XOR<ShipmentPlanDetailCreateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedCreateWithoutShipmentPlanInput>
  }

  export type ShipmentPlanDetailUpdateWithWhereUniqueWithoutShipmentPlanInput = {
    where: ShipmentPlanDetailWhereUniqueInput
    data: XOR<ShipmentPlanDetailUpdateWithoutShipmentPlanInput, ShipmentPlanDetailUncheckedUpdateWithoutShipmentPlanInput>
  }

  export type ShipmentPlanDetailUpdateManyWithWhereWithoutShipmentPlanInput = {
    where: ShipmentPlanDetailScalarWhereInput
    data: XOR<ShipmentPlanDetailUpdateManyMutationInput, ShipmentPlanDetailUncheckedUpdateManyWithoutShipmentPlanInput>
  }

  export type ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput = {
    ProductStock: ProductStockCreateNestedOneWithoutShipmentAchievementDetailInput
    ShipmentAchievement: ShipmentAchievementCreateNestedOneWithoutShipmentAchievementDetailInput
  }

  export type ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput = {
    Id?: number
    ShipmentAchievementId: number
    ProductStockId: number
  }

  export type ShipmentAchievementDetailCreateOrConnectWithoutShipmentPlanDetailInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    create: XOR<ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentAchievementDetailCreateManyShipmentPlanDetailInputEnvelope = {
    data: ShipmentAchievementDetailCreateManyShipmentPlanDetailInput | ShipmentAchievementDetailCreateManyShipmentPlanDetailInput[]
  }

  export type ProductCreateWithoutShipmentPlanDetailInput = {
    Name: string
    ProductStock?: ProductStockCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutShipmentPlanDetailInput = {
    Id?: number
    Name: string
    ProductStock?: ProductStockUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutShipmentPlanDetailInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutShipmentPlanDetailInput, ProductUncheckedCreateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentPlanCreateWithoutShipmentPlanDetailInput = {
    Customer: CustomerCreateNestedOneWithoutShipmentPlanInput
  }

  export type ShipmentPlanUncheckedCreateWithoutShipmentPlanDetailInput = {
    Id?: number
    CustomerId: number
  }

  export type ShipmentPlanCreateOrConnectWithoutShipmentPlanDetailInput = {
    where: ShipmentPlanWhereUniqueInput
    create: XOR<ShipmentPlanCreateWithoutShipmentPlanDetailInput, ShipmentPlanUncheckedCreateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentAchievementDetailUpsertWithWhereUniqueWithoutShipmentPlanDetailInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    update: XOR<ShipmentAchievementDetailUpdateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedUpdateWithoutShipmentPlanDetailInput>
    create: XOR<ShipmentAchievementDetailCreateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedCreateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentAchievementDetailUpdateWithWhereUniqueWithoutShipmentPlanDetailInput = {
    where: ShipmentAchievementDetailWhereUniqueInput
    data: XOR<ShipmentAchievementDetailUpdateWithoutShipmentPlanDetailInput, ShipmentAchievementDetailUncheckedUpdateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentAchievementDetailUpdateManyWithWhereWithoutShipmentPlanDetailInput = {
    where: ShipmentAchievementDetailScalarWhereInput
    data: XOR<ShipmentAchievementDetailUpdateManyMutationInput, ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentPlanDetailInput>
  }

  export type ProductUpsertWithoutShipmentPlanDetailInput = {
    update: XOR<ProductUpdateWithoutShipmentPlanDetailInput, ProductUncheckedUpdateWithoutShipmentPlanDetailInput>
    create: XOR<ProductCreateWithoutShipmentPlanDetailInput, ProductUncheckedCreateWithoutShipmentPlanDetailInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutShipmentPlanDetailInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutShipmentPlanDetailInput, ProductUncheckedUpdateWithoutShipmentPlanDetailInput>
  }

  export type ProductUpdateWithoutShipmentPlanDetailInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ProductStock?: ProductStockUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutShipmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ProductStock?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShipmentPlanUpsertWithoutShipmentPlanDetailInput = {
    update: XOR<ShipmentPlanUpdateWithoutShipmentPlanDetailInput, ShipmentPlanUncheckedUpdateWithoutShipmentPlanDetailInput>
    create: XOR<ShipmentPlanCreateWithoutShipmentPlanDetailInput, ShipmentPlanUncheckedCreateWithoutShipmentPlanDetailInput>
    where?: ShipmentPlanWhereInput
  }

  export type ShipmentPlanUpdateToOneWithWhereWithoutShipmentPlanDetailInput = {
    where?: ShipmentPlanWhereInput
    data: XOR<ShipmentPlanUpdateWithoutShipmentPlanDetailInput, ShipmentPlanUncheckedUpdateWithoutShipmentPlanDetailInput>
  }

  export type ShipmentPlanUpdateWithoutShipmentPlanDetailInput = {
    Customer?: CustomerUpdateOneRequiredWithoutShipmentPlanNestedInput
  }

  export type ShipmentPlanUncheckedUpdateWithoutShipmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    CustomerId?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateWithoutTreatmentAchievementInput = {
    Name: string
    ReceivingAchievement?: ReceivingAchievementCreateNestedManyWithoutEmployeeInput
    ShipmentAchievement?: ShipmentAchievementCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTreatmentAchievementInput = {
    Id?: number
    Name: string
    ReceivingAchievement?: ReceivingAchievementUncheckedCreateNestedManyWithoutEmployeeInput
    ShipmentAchievement?: ShipmentAchievementUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTreatmentAchievementInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTreatmentAchievementInput, EmployeeUncheckedCreateWithoutTreatmentAchievementInput>
  }

  export type TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentPlanDetail: TreatmentPlanDetailCreateNestedOneWithoutTreatmentAchievementDetailInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
  }

  export type TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput = {
    Id?: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailCreateOrConnectWithoutTreatmentAchievementInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    create: XOR<TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput>
  }

  export type TreatmentAchievementDetailCreateManyTreatmentAchievementInputEnvelope = {
    data: TreatmentAchievementDetailCreateManyTreatmentAchievementInput | TreatmentAchievementDetailCreateManyTreatmentAchievementInput[]
  }

  export type EmployeeUpsertWithoutTreatmentAchievementInput = {
    update: XOR<EmployeeUpdateWithoutTreatmentAchievementInput, EmployeeUncheckedUpdateWithoutTreatmentAchievementInput>
    create: XOR<EmployeeCreateWithoutTreatmentAchievementInput, EmployeeUncheckedCreateWithoutTreatmentAchievementInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTreatmentAchievementInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTreatmentAchievementInput, EmployeeUncheckedUpdateWithoutTreatmentAchievementInput>
  }

  export type EmployeeUpdateWithoutTreatmentAchievementInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ReceivingAchievement?: ReceivingAchievementUpdateManyWithoutEmployeeNestedInput
    ShipmentAchievement?: ShipmentAchievementUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTreatmentAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ReceivingAchievement?: ReceivingAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
    ShipmentAchievement?: ShipmentAchievementUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentAchievementInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    update: XOR<TreatmentAchievementDetailUpdateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedUpdateWithoutTreatmentAchievementInput>
    create: XOR<TreatmentAchievementDetailCreateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentAchievementInput>
  }

  export type TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentAchievementInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    data: XOR<TreatmentAchievementDetailUpdateWithoutTreatmentAchievementInput, TreatmentAchievementDetailUncheckedUpdateWithoutTreatmentAchievementInput>
  }

  export type TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentAchievementInput = {
    where: TreatmentAchievementDetailScalarWhereInput
    data: XOR<TreatmentAchievementDetailUpdateManyMutationInput, TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentAchievementInput>
  }

  export type ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Id?: number
    ProductId: number
    WarehouseId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type TreatmentAchievementCreateWithoutTreatmentAchievementDetailInput = {
    TreatedAt?: Date | string
    Employee: EmployeeCreateNestedOneWithoutTreatmentAchievementInput
  }

  export type TreatmentAchievementUncheckedCreateWithoutTreatmentAchievementDetailInput = {
    Id?: number
    TreatedAt?: Date | string
    EmployeeId: number
  }

  export type TreatmentAchievementCreateOrConnectWithoutTreatmentAchievementDetailInput = {
    where: TreatmentAchievementWhereUniqueInput
    create: XOR<TreatmentAchievementCreateWithoutTreatmentAchievementDetailInput, TreatmentAchievementUncheckedCreateWithoutTreatmentAchievementDetailInput>
  }

  export type TreatmentPlanDetailCreateWithoutTreatmentAchievementDetailInput = {
    Quantity: number
    ProductStock: ProductStockCreateNestedOneWithoutTreatmentPlanDetailInput
    TreatmentPlan: TreatmentPlanCreateNestedOneWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailUncheckedCreateWithoutTreatmentAchievementDetailInput = {
    Id?: number
    TreatmentPlanId: number
    ProductStockId: number
    Quantity: number
  }

  export type TreatmentPlanDetailCreateOrConnectWithoutTreatmentAchievementDetailInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    create: XOR<TreatmentPlanDetailCreateWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentAchievementDetailInput>
  }

  export type ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Id?: number
    ProductId: number
    WarehouseId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type ProductStockUpsertWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    update: XOR<ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
    create: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
    where?: ProductStockWhereInput
  }

  export type ProductStockUpdateToOneWithWhereWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    where?: ProductStockWhereInput
    data: XOR<ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput, ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput>
  }

  export type ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type TreatmentAchievementUpsertWithoutTreatmentAchievementDetailInput = {
    update: XOR<TreatmentAchievementUpdateWithoutTreatmentAchievementDetailInput, TreatmentAchievementUncheckedUpdateWithoutTreatmentAchievementDetailInput>
    create: XOR<TreatmentAchievementCreateWithoutTreatmentAchievementDetailInput, TreatmentAchievementUncheckedCreateWithoutTreatmentAchievementDetailInput>
    where?: TreatmentAchievementWhereInput
  }

  export type TreatmentAchievementUpdateToOneWithWhereWithoutTreatmentAchievementDetailInput = {
    where?: TreatmentAchievementWhereInput
    data: XOR<TreatmentAchievementUpdateWithoutTreatmentAchievementDetailInput, TreatmentAchievementUncheckedUpdateWithoutTreatmentAchievementDetailInput>
  }

  export type TreatmentAchievementUpdateWithoutTreatmentAchievementDetailInput = {
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateOneRequiredWithoutTreatmentAchievementNestedInput
  }

  export type TreatmentAchievementUncheckedUpdateWithoutTreatmentAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EmployeeId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentPlanDetailUpsertWithoutTreatmentAchievementDetailInput = {
    update: XOR<TreatmentPlanDetailUpdateWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUncheckedUpdateWithoutTreatmentAchievementDetailInput>
    create: XOR<TreatmentPlanDetailCreateWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentAchievementDetailInput>
    where?: TreatmentPlanDetailWhereInput
  }

  export type TreatmentPlanDetailUpdateToOneWithWhereWithoutTreatmentAchievementDetailInput = {
    where?: TreatmentPlanDetailWhereInput
    data: XOR<TreatmentPlanDetailUpdateWithoutTreatmentAchievementDetailInput, TreatmentPlanDetailUncheckedUpdateWithoutTreatmentAchievementDetailInput>
  }

  export type TreatmentPlanDetailUpdateWithoutTreatmentAchievementDetailInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    ProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput
    TreatmentPlan?: TreatmentPlanUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailUncheckedUpdateWithoutTreatmentAchievementDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockUpsertWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    update: XOR<ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
    create: XOR<ProductStockCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUncheckedCreateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
    where?: ProductStockWhereInput
  }

  export type ProductStockUpdateToOneWithWhereWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    where?: ProductStockWhereInput
    data: XOR<ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput, ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput>
  }

  export type ProductStockUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type TreatmentPlanDetailCreateWithoutTreatmentPlanInput = {
    Quantity: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailCreateNestedManyWithoutTreatmentPlanDetailInput
    ProductStock: ProductStockCreateNestedOneWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput = {
    Id?: number
    ProductStockId: number
    Quantity: number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutTreatmentPlanDetailInput
  }

  export type TreatmentPlanDetailCreateOrConnectWithoutTreatmentPlanInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    create: XOR<TreatmentPlanDetailCreateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput>
  }

  export type TreatmentPlanDetailCreateManyTreatmentPlanInputEnvelope = {
    data: TreatmentPlanDetailCreateManyTreatmentPlanInput | TreatmentPlanDetailCreateManyTreatmentPlanInput[]
  }

  export type TreatmentPlanDetailUpsertWithWhereUniqueWithoutTreatmentPlanInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    update: XOR<TreatmentPlanDetailUpdateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedUpdateWithoutTreatmentPlanInput>
    create: XOR<TreatmentPlanDetailCreateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedCreateWithoutTreatmentPlanInput>
  }

  export type TreatmentPlanDetailUpdateWithWhereUniqueWithoutTreatmentPlanInput = {
    where: TreatmentPlanDetailWhereUniqueInput
    data: XOR<TreatmentPlanDetailUpdateWithoutTreatmentPlanInput, TreatmentPlanDetailUncheckedUpdateWithoutTreatmentPlanInput>
  }

  export type TreatmentPlanDetailUpdateManyWithWhereWithoutTreatmentPlanInput = {
    where: TreatmentPlanDetailScalarWhereInput
    data: XOR<TreatmentPlanDetailUpdateManyMutationInput, TreatmentPlanDetailUncheckedUpdateManyWithoutTreatmentPlanInput>
  }

  export type TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievement: TreatmentAchievementCreateNestedOneWithoutTreatmentAchievementDetailInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock: ProductStockCreateNestedOneWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
  }

  export type TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput = {
    Id?: number
    TreatmentAchievementId: number
    UsedProductStockId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailCreateOrConnectWithoutTreatmentPlanDetailInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    create: XOR<TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentAchievementDetailCreateManyTreatmentPlanDetailInputEnvelope = {
    data: TreatmentAchievementDetailCreateManyTreatmentPlanDetailInput | TreatmentAchievementDetailCreateManyTreatmentPlanDetailInput[]
  }

  export type ProductStockCreateWithoutTreatmentPlanDetailInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    Warehouse: WarehouseCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutTreatmentPlanDetailInput = {
    Id?: number
    ProductId: number
    WarehouseId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutTreatmentPlanDetailInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutTreatmentPlanDetailInput, ProductStockUncheckedCreateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentPlanCreateWithoutTreatmentPlanDetailInput = {

  }

  export type TreatmentPlanUncheckedCreateWithoutTreatmentPlanDetailInput = {
    Id?: number
  }

  export type TreatmentPlanCreateOrConnectWithoutTreatmentPlanDetailInput = {
    where: TreatmentPlanWhereUniqueInput
    create: XOR<TreatmentPlanCreateWithoutTreatmentPlanDetailInput, TreatmentPlanUncheckedCreateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentAchievementDetailUpsertWithWhereUniqueWithoutTreatmentPlanDetailInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    update: XOR<TreatmentAchievementDetailUpdateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedUpdateWithoutTreatmentPlanDetailInput>
    create: XOR<TreatmentAchievementDetailCreateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedCreateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentAchievementDetailUpdateWithWhereUniqueWithoutTreatmentPlanDetailInput = {
    where: TreatmentAchievementDetailWhereUniqueInput
    data: XOR<TreatmentAchievementDetailUpdateWithoutTreatmentPlanDetailInput, TreatmentAchievementDetailUncheckedUpdateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentAchievementDetailUpdateManyWithWhereWithoutTreatmentPlanDetailInput = {
    where: TreatmentAchievementDetailScalarWhereInput
    data: XOR<TreatmentAchievementDetailUpdateManyMutationInput, TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentPlanDetailInput>
  }

  export type ProductStockUpsertWithoutTreatmentPlanDetailInput = {
    update: XOR<ProductStockUpdateWithoutTreatmentPlanDetailInput, ProductStockUncheckedUpdateWithoutTreatmentPlanDetailInput>
    create: XOR<ProductStockCreateWithoutTreatmentPlanDetailInput, ProductStockUncheckedCreateWithoutTreatmentPlanDetailInput>
    where?: ProductStockWhereInput
  }

  export type ProductStockUpdateToOneWithWhereWithoutTreatmentPlanDetailInput = {
    where?: ProductStockWhereInput
    data: XOR<ProductStockUpdateWithoutTreatmentPlanDetailInput, ProductStockUncheckedUpdateWithoutTreatmentPlanDetailInput>
  }

  export type ProductStockUpdateWithoutTreatmentPlanDetailInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutTreatmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
  }

  export type TreatmentPlanUpsertWithoutTreatmentPlanDetailInput = {
    update: XOR<TreatmentPlanUpdateWithoutTreatmentPlanDetailInput, TreatmentPlanUncheckedUpdateWithoutTreatmentPlanDetailInput>
    create: XOR<TreatmentPlanCreateWithoutTreatmentPlanDetailInput, TreatmentPlanUncheckedCreateWithoutTreatmentPlanDetailInput>
    where?: TreatmentPlanWhereInput
  }

  export type TreatmentPlanUpdateToOneWithWhereWithoutTreatmentPlanDetailInput = {
    where?: TreatmentPlanWhereInput
    data: XOR<TreatmentPlanUpdateWithoutTreatmentPlanDetailInput, TreatmentPlanUncheckedUpdateWithoutTreatmentPlanDetailInput>
  }

  export type TreatmentPlanUpdateWithoutTreatmentPlanDetailInput = {

  }

  export type TreatmentPlanUncheckedUpdateWithoutTreatmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockCreateWithoutWarehouseInput = {
    Used?: number
    Product: ProductCreateNestedOneWithoutProductStockInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockUncheckedCreateWithoutWarehouseInput = {
    Id?: number
    ProductId: number
    Used?: number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedCreateNestedManyWithoutProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedCreateNestedManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedCreateNestedManyWithoutProductStockInput
  }

  export type ProductStockCreateOrConnectWithoutWarehouseInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductStockCreateManyWarehouseInputEnvelope = {
    data: ProductStockCreateManyWarehouseInput | ProductStockCreateManyWarehouseInput[]
  }

  export type ProductStockUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutWarehouseInput, ProductStockUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ProductStockCreateWithoutWarehouseInput, ProductStockUncheckedCreateWithoutWarehouseInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutWarehouseInput, ProductStockUncheckedUpdateWithoutWarehouseInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutWarehouseInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ShipmentPlanCreateManyCustomerInput = {

  }

  export type ShipmentPlanUpdateWithoutCustomerInput = {
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateManyWithoutShipmentPlanNestedInput
  }

  export type ShipmentPlanUncheckedUpdateWithoutCustomerInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetail?: ShipmentPlanDetailUncheckedUpdateManyWithoutShipmentPlanNestedInput
  }

  export type ShipmentPlanUncheckedUpdateManyWithoutCustomerInput = {
    Id?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementCreateManyEmployeeInput = {
    ReceivedAt?: Date | string
  }

  export type ShipmentAchievementCreateManyEmployeeInput = {
    ShippedAt?: Date | string
  }

  export type TreatmentAchievementCreateManyEmployeeInput = {
    TreatedAt?: Date | string
  }

  export type ReceivingAchievementUpdateWithoutEmployeeInput = {
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutReceivingAchievementNestedInput
  }

  export type ReceivingAchievementUncheckedUpdateWithoutEmployeeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutReceivingAchievementNestedInput
  }

  export type ReceivingAchievementUncheckedUpdateManyWithoutEmployeeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentAchievementUpdateWithoutEmployeeInput = {
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutShipmentAchievementNestedInput
  }

  export type ShipmentAchievementUncheckedUpdateWithoutEmployeeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentAchievementNestedInput
  }

  export type ShipmentAchievementUncheckedUpdateManyWithoutEmployeeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentAchievementUpdateWithoutEmployeeInput = {
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TreatmentAchievementDetail?: TreatmentAchievementDetailUpdateManyWithoutTreatmentAchievementNestedInput
  }

  export type TreatmentAchievementUncheckedUpdateWithoutEmployeeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentAchievementNestedInput
  }

  export type TreatmentAchievementUncheckedUpdateManyWithoutEmployeeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductStockCreateManyProductInput = {
    WarehouseId: number
    Used?: number
  }

  export type ShipmentPlanDetailCreateManyProductInput = {
    ShipmentPlanId: number
    Quantity: number
  }

  export type ProductStockUpdateWithoutProductInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Warehouse?: WarehouseUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateManyWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    WarehouseId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentPlanDetailUpdateWithoutProductInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutShipmentPlanDetailNestedInput
    ShipmentPlan?: ShipmentPlanUpdateOneRequiredWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailUncheckedUpdateWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentPlanId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailUncheckedUpdateManyWithoutProductInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentPlanId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementDetailCreateManyProductStockInput = {
    ReceivingAchievementId: number
  }

  export type ShipmentAchievementDetailCreateManyProductStockInput = {
    ShipmentAchievementId: number
    ShipmentPlanDetailId: number
  }

  export type TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    UsedProductStockId: number
  }

  export type TreatmentAchievementDetailCreateManyProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    TreatmentAchievementId: number
    TreatmentPlanDetailId: number
    ProducedProductStockId: number
  }

  export type TreatmentPlanDetailCreateManyProductStockInput = {
    TreatmentPlanId: number
    Quantity: number
  }

  export type ReceivingAchievementDetailUpdateWithoutProductStockInput = {
    ReceivingAchievement?: ReceivingAchievementUpdateOneRequiredWithoutReceivingAchievementDetailNestedInput
  }

  export type ReceivingAchievementDetailUncheckedUpdateWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailUpdateWithoutProductStockInput = {
    ShipmentAchievement?: ShipmentAchievementUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
  }

  export type ShipmentAchievementDetailUncheckedUpdateWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetailId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetailId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailUpdateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    TreatmentAchievement?: TreatmentAchievementUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
  }

  export type TreatmentAchievementDetailUncheckedUpdateWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailUpdateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievement?: TreatmentAchievementUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
  }

  export type TreatmentAchievementDetailUncheckedUpdateWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentPlanDetailUpdateWithoutProductStockInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUpdateManyWithoutTreatmentPlanDetailNestedInput
    TreatmentPlan?: TreatmentPlanUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailUncheckedUpdateWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementDetailCreateManyReceivingAchievementInput = {
    ProductStockId: number
  }

  export type ReceivingAchievementDetailUpdateWithoutReceivingAchievementInput = {
    ProductStock?: ProductStockUpdateOneRequiredWithoutReceivingAchievementDetailNestedInput
  }

  export type ReceivingAchievementDetailUncheckedUpdateWithoutReceivingAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceivingAchievementDetailUncheckedUpdateManyWithoutReceivingAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailCreateManyShipmentAchievementInput = {
    ProductStockId: number
    ShipmentPlanDetailId: number
  }

  export type ShipmentAchievementDetailUpdateWithoutShipmentAchievementInput = {
    ProductStock?: ProductStockUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
    ShipmentPlanDetail?: ShipmentPlanDetailUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
  }

  export type ShipmentAchievementDetailUncheckedUpdateWithoutShipmentAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetailId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    ShipmentPlanDetailId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentPlanDetailCreateManyShipmentPlanInput = {
    ProductId: number
    Quantity: number
  }

  export type ShipmentPlanDetailUpdateWithoutShipmentPlanInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutShipmentPlanDetailNestedInput
    Product?: ProductUpdateOneRequiredWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailUncheckedUpdateWithoutShipmentPlanInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentPlanDetailNestedInput
  }

  export type ShipmentPlanDetailUncheckedUpdateManyWithoutShipmentPlanInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailCreateManyShipmentPlanDetailInput = {
    ShipmentAchievementId: number
    ProductStockId: number
  }

  export type ShipmentAchievementDetailUpdateWithoutShipmentPlanDetailInput = {
    ProductStock?: ProductStockUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
    ShipmentAchievement?: ShipmentAchievementUpdateOneRequiredWithoutShipmentAchievementDetailNestedInput
  }

  export type ShipmentAchievementDetailUncheckedUpdateWithoutShipmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ShipmentAchievementDetailUncheckedUpdateManyWithoutShipmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ShipmentAchievementId?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailCreateManyTreatmentAchievementInput = {
    TreatmentPlanDetailId: number
    UsedProductStockId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailUpdateWithoutTreatmentAchievementInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
  }

  export type TreatmentAchievementDetailUncheckedUpdateWithoutTreatmentAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentAchievementInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentPlanDetailId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentPlanDetailCreateManyTreatmentPlanInput = {
    ProductStockId: number
    Quantity: number
  }

  export type TreatmentPlanDetailUpdateWithoutTreatmentPlanInput = {
    Quantity?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUpdateManyWithoutTreatmentPlanDetailNestedInput
    ProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailUncheckedUpdateWithoutTreatmentPlanInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementDetail?: TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentPlanDetailNestedInput
  }

  export type TreatmentPlanDetailUncheckedUpdateManyWithoutTreatmentPlanInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductStockId?: IntFieldUpdateOperationsInput | number
    Quantity?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailCreateManyTreatmentPlanDetailInput = {
    TreatmentAchievementId: number
    UsedProductStockId: number
    ProducedProductStockId: number
  }

  export type TreatmentAchievementDetailUpdateWithoutTreatmentPlanDetailInput = {
    ProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievement?: TreatmentAchievementUpdateOneRequiredWithoutTreatmentAchievementDetailNestedInput
    ProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: ProductStockUpdateOneRequiredWithoutTreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
  }

  export type TreatmentAchievementDetailUncheckedUpdateWithoutTreatmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentAchievementDetailUncheckedUpdateManyWithoutTreatmentPlanDetailInput = {
    Id?: IntFieldUpdateOperationsInput | number
    TreatmentAchievementId?: IntFieldUpdateOperationsInput | number
    UsedProductStockId?: IntFieldUpdateOperationsInput | number
    ProducedProductStockId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductStockCreateManyWarehouseInput = {
    ProductId: number
    Used?: number
  }

  export type ProductStockUpdateWithoutWarehouseInput = {
    Used?: IntFieldUpdateOperationsInput | number
    Product?: ProductUpdateOneRequiredWithoutProductStockNestedInput
    ReceivingAchievementDetail?: ReceivingAchievementDetailUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateWithoutWarehouseInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
    ReceivingAchievementDetail?: ReceivingAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    ShipmentAchievementDetail?: ShipmentAchievementDetailUncheckedUpdateManyWithoutProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_ProducedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_ProducedProductStockIdToProductStockNestedInput
    TreatmentAchievementDetail_TreatmentAchievementDetail_UsedProductStockIdToProductStock?: TreatmentAchievementDetailUncheckedUpdateManyWithoutProductStock_TreatmentAchievementDetail_UsedProductStockIdToProductStockNestedInput
    TreatmentPlanDetail?: TreatmentPlanDetailUncheckedUpdateManyWithoutProductStockNestedInput
  }

  export type ProductStockUncheckedUpdateManyWithoutWarehouseInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ProductId?: IntFieldUpdateOperationsInput | number
    Used?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}