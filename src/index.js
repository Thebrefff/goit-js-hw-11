import './css/styles.css';
import axios from 'axios';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');

const searchForm = document.querySelector('.search-form');
const submitBtn = document.querySelector("[type='submit']");
const gallery = document.querySelector('.gallery');
const footer = document.querySelector('.footer');
const loadMore = document.querySelector('.load-more');

const PIXABAY_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '34992502-bed1b4babb0a69c7137235165';
const DEBOUNCE_DELAY = 100;
let currentPage = 1;
const POST_PER_PAGE = 40;
