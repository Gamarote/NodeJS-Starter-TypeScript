import { AppRouter } from '../main/AppRouter'
import { Method } from '../main/Method'
import { Request, Response } from 'express'

export default function Route(path: string, ...METHODS: Method[]) {
    return (target: AppRouter, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        if(descriptor.value instanceof Function) 
            METHODS.forEach(METHOD => { target.setRoute(descriptor.value, path, METHOD) })
        return descriptor
    }
}