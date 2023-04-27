import { DEVICE, ROOM, USER } from "@/api";
import axios from "axios";

export async function getUserById(id, accessToken) {
  const { data } = await axios.get(`${USER}/${id}`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.data;
}

export async function getUserByIds(ids, accessToken) {
  const { data } = await axios.post(
    USER,
    {
      userIds: ids,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function getDeviceByIds(ids, accessToken) {
  const { data } = await axios.post(
    DEVICE,
    {
      deviceIds: ids,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function getDeviceByType(type, accessToken) {
  const { data } = await axios.get(
    `${DEVICE}/type/${type}`,

    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function getAllRooms(accessToken) {
  const { data } = await axios.get(ROOM, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.data;
}

export async function addUserToRoom(roomId, userId, accessToken) {
  const { data } = await axios.post(
    `${ROOM}/${roomId}/users`,
    { userId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function getUserByEmail(email, accessToken) {
  const { data } = await axios.get(`${USER}/email/${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data.data;
}

export async function removeUserInRoom(roomId, userId, accessToken) {
  const { data } = await axios.patch(
    `${ROOM}/${roomId}/users`,
    {
      userId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  axios.patch(
    `${USER}/${userId}/rooms/${roomId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function addDeviceToRoom(roomId, deviceId, accessToken) {
  const { data } = await axios.post(
    `${ROOM}/${roomId}/devices`,
    {
      deviceId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function removeDeviceInRoom(roomId, deviceId, accessToken) {
  const { data } = await axios.patch(
    `${ROOM}/${roomId}/devices`,
    {
      deviceId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function getRoomsOfUser(userId, accessToken) {
  const { data } = await axios.get(
    `${USER}/${userId}/rooms`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return data.data;
}

export async function toggleStatus(deviceId, status, accessToken) {
  const { data } = await axios.post(
    `${DEVICE}/${deviceId}/light`,
    {
      status
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
);
return data.data;
}

export async function changSpeed(deviceId, value, accessToken) {
  const { data } = await axios.post(
    `${DEVICE}/${deviceId}/fan`,
    {
      value
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
);
return data.data;
}

