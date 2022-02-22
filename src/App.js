import localforage from 'localforage';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import MRoutes from './Route/Backend/MRoutes';
import $ from 'jquery';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
				{MRoutes()}
			</Routes>
        </BrowserRouter>
    );
}

$(function() {
	
});