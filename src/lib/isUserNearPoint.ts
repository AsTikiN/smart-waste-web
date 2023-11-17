export const isUserNearPoint = (
  userCoords: { lat: number; lng: number },
  pointCoords: { lat: number; lng: number },
  threshold = 20,
) => {
  const R = 6371000;
  const lat1 = userCoords.lat;
  const lon1 = userCoords.lng;
  const lat2 = pointCoords.lat;
  const lon2 = pointCoords.lng;

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance <= threshold;
};
