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


# Bug 3 - No search is queried.

What is broken - Input on the searchbar did not return anything
Where - App.jsx, line 45
Why - Search did not fire because the useEffect hook has an empty dependency arrar. So, it only runs once on mount and does nothing else
How i fixed it - Added [query] to the dependency instead of the empty [] array and the setSearchResult([]) to hold the array. Also added a clearTimeout function to cleanup previous timer and start a new search on every keystroke


# Bug 4 - Reversed Watch list filtered

What is broken - filteredWatchList returned the reverse of what theyy should  on click
Where - App.jsx, line 92
Why - The if (filter === "watched") conditional statement should return n.watched instead of the reverse !n.watched. Same also for the second statement.
How i fixed it - Changed !n.wtched to n.watched (for the first statement) and n.watched to !n.watched (for the second statement)


# Bug 5 - Missing closing bracket

What is broken - Code not broken. Only an omission of closing bracket
Where - App.jsx, line 142
Why - filteredWatchList.length is missing its closing tag
How i fixed it - Added closing tag after filteredWatchList.length


# Bug 6 - Multiple addition of same movie

What is broken - A movie is duplicated on every click when added to watchList
Where - App.jsx, line 125
Why - Nothing to check same movie being added more than once
How i fixed it - Added the some() method to watchList to check whether a movie is already added to the watchList. Also, the actionLabel attribute was conditioned to show "Added" after movie is added to watchList
-Also added - CSS style to button background to change to green when movie is added.