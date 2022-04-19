import React from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertapp from './GifExpertapp';

import './index.css';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render( <GifExpertapp /> );