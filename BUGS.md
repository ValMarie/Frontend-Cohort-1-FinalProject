========== FINAL PROJECT =========

BUG FIXES
# Bug 1 - Page is blank

What is broken - Browser is blank with feature on it
Where - App.jsx, line 1
Why - The "useState" hook was not defined.
How i fixed it - Added "useState" to the import module from react


# Bug 2 - localStorage key does not correspond (mismatched key)

What is broken - Watch list saved did not return on page refresh
Where - App.jsx, line 92
Why - getItem key was set as "movueWatchList" while setItem key was set as "myWatchList". localStoage stored a different key 
How i fixed it - Changed setItem("myWatchlist") to setItem("movieWatchList")


# Bug 3 - No search is queried.

What is broken - Input on the searchbar did not return anything
Where - App.jsx, line 45
Why - Search did not fire because the useEffect hook has an empty dependency arrar. So, it only runs once on mount and does nothing else
How i fixed it - Added [query] to the dependency instead of the empty [] array and the setSearchResult([]) to hold the array. Also added a clearTimeout function to cleanup previous timer and start a new search on every keystroke
