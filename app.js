1.	Assuming you have an array of n games, write a script (in a language of your choice) that receives the number of games being played and returns a multidimensional array of all possible combinations.
--------------------------------------------
ANSWER::
function MakeArray(array, value) {
    var a = [];

    for (var i = 0; i < array.length; i++) {
        var b = [];
        for (var p = 0; p < array[i]; p++) {
            b[p] = value;
        }
        a[i] = b;
    }

    return a;
}
 ______________________________________________________________________________________________________________
3.	A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking. If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again. Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.
--------------------------------
ANSWER::
--Quite hard, lets say I make 19 drops:
From the first floor to 18th floor i.e 
(1 to 19) 20 ::breaks at 20{from 1 to 19 in 19 drops}
lets go lower::
(1 to 18) 39 ::breaks at 39{from 21 to 38 in 18 drops}
lets go lower again::
(1 to 17) 57 ::breaks at 57{from 40 to 56 in 17 drops}
------------------------------
 Finding the highest is tricky but for my case lets take 18 as 
it gives a higher floor that the egg breaks and well start from 18th
floor all the way to 100 by doing some additions
(18,35,51,66,80,93,100)-- Here we are reducing the number of floors
until we reach 100 until it breaks.
In this case of starting 19 drops, the highest floor will be 18
________________________________________________________________________________________________