/**
 * @packageDocumentation
 * @module api.functional.monitors.system
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { ISystem } from "./../../../structures/monitors/ISystem";

/**
 * @controller SystemController.get()
 * @path GET /monitors/system
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function get
    (
        connection: IConnection
    ): Promise<get.Output>
{
    return Fetcher.fetch
    (
        connection,
        get.ENCRYPTED,
        get.METHOD,
        get.path()
    );
}
export namespace get
{
    export type Output = Primitive<ISystem>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/monitors/system";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(): string
    {
        return `/monitors/system`;
    }
}

/**
 * @internal
 * 
 * @controller SystemController.internal_server_error()
 * @path GET /monitors/system/internal_server_error
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function internal_server_error
    (
        connection: IConnection
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        internal_server_error.ENCRYPTED,
        internal_server_error.METHOD,
        internal_server_error.path()
    );
}
export namespace internal_server_error
{

    export const METHOD = "GET" as const;
    export const PATH: string = "/monitors/system/internal_server_error";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(): string
    {
        return `/monitors/system/internal_server_error`;
    }
}

/**
 * @internal
 * 
 * @controller SystemController.uncaught_exception()
 * @path GET /monitors/system/uncaught_exception
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function uncaught_exception
    (
        connection: IConnection
    ): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        uncaught_exception.ENCRYPTED,
        uncaught_exception.METHOD,
        uncaught_exception.path()
    );
}
export namespace uncaught_exception
{

    export const METHOD = "GET" as const;
    export const PATH: string = "/monitors/system/uncaught_exception";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(): string
    {
        return `/monitors/system/uncaught_exception`;
    }
}