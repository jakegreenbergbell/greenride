# Greenride

Hack on the Hill 2022.

## Our Vision

We've all heard of it before. Carbon emissions are bad for our globe!

But how easy is it to see how our everyday commute contributes to carbon emissions? Without an easy-to-use interface that provides tangible, customized feedback based on your travel method and routes, it's hard to know how we affect our local environments.

Greenride brings dynamic emissions and environmental metrics right where you need it most - on your maps, next to the routes you travel every day.

We want to make it easy for each individual to see how their daily commute affects their environment. And so we introduce to you... GREENRIDE!

## Founding Fathers

- Jake Greenberg-Bell
- Bryson Xiao
- Kyle Pu

## References

https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=typical%20passenger%20vehicle%3F-,A%20typical%20passenger%20vehicle%20emits%20about%204.6%20metric%20tons%20of,8%2C887%20grams%20of%20CO2.

- Has some stats on CO2 released per gallon of gasoline
- Can use as a starting point for customization of output based on car type
- Has info on other types of vehicle emissions

https://www.epa.gov/compliance-and-fuel-economy-data/data-cars-used-testing-fuel-economy

- Has stats on grams of CO2 per gallon of a bunch of different cars

https://github.com/Zenigma/emission_tracker_treehacks

- Took data file `carData.js` from this repo
- Data file originally from the same epa sources listed above

https://stackoverflow.com/questions/55424790/how-i-draw-a-route-with-react-google-maps-component

- `MapDirectionsRenderer` component source code from here
    - Transformed this component into a functional component so we could use `useEffect` and force a re-render every time the longitude or latitude of source or destination changed

https://stackoverflow.com/questions/3251609/how-to-get-total-driving-distance-with-google-maps-api-v3

- For driving distance and duration extraction
