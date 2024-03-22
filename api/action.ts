"use server";

import { discoverSeriesQueries, dicoverMovieQueries } from "@/lib/types";
import { property } from "lodash";

const { API_KEY, API_TOKEN, API_BASE_URL } = process.env;

export const fetchDiscoverMovies = async (query: dicoverMovieQueries = {}) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/discover/movie${
        query.page ? `?page=${query.page}` : "?page=1"
      }${query.sort_by ? `&sort_by=${query.sort_by}` : ""}${
        query.genres ? `&with_genres=${query.genres}` : ""
      }${query.language ? `&language=${query.language}` : ""}`,
      options
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};
export const fetchDiscoverSeries = async (
  query: discoverSeriesQueries = {}
) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/discover/tv${
        query.page ? `?page=${query.page}` : "?page=1"
      }${query.sort_by ? `&sort_by=${query.sort_by}` : ""}${
        query.genres ? `&with_genres=${query.genres}` : ""
      }${query.language ? `&language=${query.language}` : ""}`,
      options
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovies = async (type: string, page: number = 1) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: {
        revalidate: 3600,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/movie/${type}?page=${page}`,
      options
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};
export const fetchSeries = async (type: string, page: number = 1) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: {
        revalidate: 3600,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/tv/${type}?page=${page}`,
      options
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (movie_id: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(`${API_BASE_URL}/movie/${movie_id}`, options);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getSeriesDetail = async (series_id: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(`${API_BASE_URL}/tv/${series_id}`, options);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieReview = async (movie_id: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/movie/${movie_id}/reviews?language=en-US&page=1`,
      options
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};

export const getCast = async (path: string, id: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/${path}/${id}/credits`,
      options
    );

    const data = await response.json();

    return data.cast;
  } catch (error) {
    throw error;
  }
};

export const getMovieMedia = async (movie_id: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(
      `${API_BASE_URL}/movie/${movie_id}/videos`,
      options
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw error;
  }
};
