========== FINAL PROJECT =========

BUG FIXES
# Bug 1 - Page is blank

What is broken - Browser is blank with feature on it
Where - App.jsx, line 1
Why - The "useState" hook was not defined.
How i fixed it - Added "useState" to the import module from react


# Bug 2 - localStorage key does not correspond (mismatched key)

What is broken - Watch list saved did not return on page refresh
Where - App.jsx, line 31
Why - getItem key was set as "movueWatchList" while setItem key was set as "myWatchList". localStoage stored a different key 
How i fixed it - Changed setItem("myWatchlist") to setItem("movieWatchList")
