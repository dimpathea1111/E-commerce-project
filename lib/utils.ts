import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}


import {  type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function CN(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function FormatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n - 1) + '…' : str
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function avatarUrl(seed: number | string): string {
  return `https://i.pravatar.cc/150?img=${Number(seed) % 70}`
}
