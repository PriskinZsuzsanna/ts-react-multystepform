export type Plan = {
    planName: string,
    planPrice: string
}

export type AddOn = {
    addOnName: string,
    addOnPrice: string
}


export type Data = {
    name: string,
    email: string,
    phone: string,
    plan: Plan,
    monthly: boolean,
    addOns: AddOn[]
}

export type PlusServices = {
    online: boolean,
    storage: boolean,
    profile: boolean
}

export type ErrorObj = {
    ename: boolean,
    eemail: boolean,
    ephone: boolean
}