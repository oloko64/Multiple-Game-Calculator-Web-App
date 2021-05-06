# Forza-Horizon-4-Tunning-Calculator-Quasar

After some time doing the calculations by hand i decided to create this script, it is complete Web based and don't have any requirements.

The results of this calculator are NOT 100% precise, driving preference, style and car by car variance are not measured. This is a base for you to start at, taking account weight distribution of the car.


# How to use it
1. Go to https://forza-h4-calculator.netlify.app

2. Use it.

2. Insert the weight of the car.
3. Insert the weight distribution percentage.
4. Insert how much softiness you want for the suspension:

10  - Very soft.

20  - Normal [Default].

30+ - Very stiff.

5. Insert the maximum value of the Rebound Stiffness bar [Default: 20]


# Formula used
Suspension = (weight * chosed_stiffness) * weight_distribution

Rebound Stiffness = max_value_bar * weight_distribution

Bump Stiffness = Rebound Stiffness * 0.5


# To Do
I want to add various calculators into this app, for this reason I created a stable branch for the Tunning Calculator, and a stable branch for the Multiple Calculators app.

Into the Main branch I will be testing and adding new things, and later merging to the correct branch.

# Version
Calculator version 0.20 (Alpha).
