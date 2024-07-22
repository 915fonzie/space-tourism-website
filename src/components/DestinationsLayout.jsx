import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router'

export default function DestinationsLayout() {
    
    const { pathname } = useLocation()

    if (pathname === "/destinations" || pathname === '/destinations/') {
        return <Navigate to="moon" replace/>
    }

    return (
        <Outlet />
    )
}