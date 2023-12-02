export interface API {
    on(action: string, id: string, cb: Function): void
    off(action: string, id: string): void
    emit(action: string, ...args: any[]): void
    clear(action: string): void
}

let listeners = new Map<string, Map<string, Function>>()

const events = {
    on: (action: string, id: string, cb: Function): void => {
        if (!listeners.has(action)) {
            listeners.set(action, new Map<string, Function>())
        }
        listeners.get(action)!.set(id, cb)
        console.log('Registered listener', { id, action })
    },
    off: (action: string, id: string): void => {
        if (listeners.has(action)) {
            listeners.get(action)!.delete(id)
            console.log('Removed listener', { id, action })
        }
    },
    emit: (action: string, ...args: any[]): void => {
        console.log('Emitted event', { action, args })
        if (listeners.has(action)) {
            listeners.get(action)!.forEach(cb => {
                cb(...args)
            })
        }
    },
    clear: (action: string): void => {
        if (listeners.has(action)) {
            listeners.get(action)!.clear()
            console.log('Cleared all listeners for action', action)
        }
    }
}

const api: API = {
    ...events
}

export default api