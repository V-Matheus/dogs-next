// @ts-nocheck
export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST() {
  return {
    url: API_URL + '/jwt-auth/v1/token',
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}
export function USER_GET() {
  return {
    url: API_URL + '/api/user',
  };
}

export function USER_POST() {
  return {
    url: API_URL + '/api/user',
  };
}

export function PHOTO_POST() {
  return {
    url: API_URL + '/api/photo',
  };
}

export function PHOTOS_GET({
  page,
  total,
  user,
}: {
  page: number;
  total: nummber;
  user: 0 | string;
}) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
  };
}

export function PHOTO_GET(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
}

export function COMMENT_POST(id: string) {
  return {
    url: `${API_URL}/api/comment/${id}`,
  };
}

export function PHOTO_DELETE(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
}

export function PASSWORD_LOST() {
  return {
    url: API_URL + '/api/password/lost',
  };
}

export function PASSWORD_RESET() {
  return {
    url: API_URL + '/api/password/reset',
  };
}

export function STATS_GET() {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
