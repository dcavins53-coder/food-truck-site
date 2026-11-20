# Bayou Boudin & Bites

## Endpoint
https://api.open-meteo.com/v1/forecast  (Open-Meteo, GET)

## What I changed using the docs
I added `&wind_speed_unit=mph&timezone=auto`.
Before: Wind speed was in `km/h` and the observation time was in `GMT` (`2026-11-20T15:30`).
After: Wind speed is in `mp/h` and the observation time is in local Oakdale, LA time `CST` (`2026-11-20T09:30`).

## Live site
https://username.github.io/truck-weather/