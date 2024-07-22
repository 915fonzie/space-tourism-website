import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router'

export default function CrewLayout() {
    
    const { pathname } = useLocation()

    if (pathname === "/crew" || pathname === '/crew/') {
        return <Navigate to="douglas-hurley" replace/>
    }

    return (
        <Outlet />
    )
}