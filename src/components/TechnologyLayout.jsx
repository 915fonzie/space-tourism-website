import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router'

export default function Technology() {
    const { pathname } = useLocation()

    if (pathname === "/technology" || pathname === '/technology/') {
        return <Navigate to="launch-vehicle" replace/>
    }

    return (
        <Outlet />
    )
}