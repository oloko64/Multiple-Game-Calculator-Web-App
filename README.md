# OLoKo64 Game Calculator
The idea is to concentrate in one place the most commons game calculators. 

I sure will be adding more in the future. Stay tunned and if you wanna help just contact me.

# How to use it
1. Go to https://gamecalculator.netlify.app/


# Forza Horizon 4 Tunning Calculator

After some time doing the calculations by hand i decided to create this script, it is complete Web based and don't have any requirements.

The results of this calculator are NOT 100% precise, driving preference, style and car by car variance are not measured. This is a base for you to start at, taking account weight distribution of the car.

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


# Arma 3 FOV Calculator
This is used to calculate the Fov in Arma 3 as it doesn't have in game.

1. Go to C:\Users\[your_username]\Documents\Arma 3
2. Open [your_username].Arma3Profile with text editor of your choice (I recommend notepad++)
3. Find fovTop and set it to what the calculator tells you   Ex.(fovTop=1.03;)
4. Find fovLeft and set it to what the calculator tells you  Ex.1.83 (fovLeft=1.83;)
5. While we are here you may as well turn off smoothing and acceleration, find mouseSmoothing and mouseAcceleration, set both to 0 (mouseSmoothing=0; mouseAcceleration=0;)
6. Save changes and close file

# Version
Calculator version 1.0.1.
