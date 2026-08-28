========== FINAL PROJECT =========
s
OVERVIEW
This is the final project for the Frontend Cohort-01 
It tests every thing ever learnt and more from the right semantic usage of HTM CSS ad JAVASCRIPT, to debugging and deployment and finally the use of AI tools for coding.

The project is a movie tracker app that searches for movies, adds  them to a wtchlist and gives details on the selected movie when clicked



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


# Bug 7 - Stale Error

What is broken - Error message persists after new search and when the search query is emptoed
Where - App.jsx, line 50, line 35
Why - The catch(err) was set to trigger an error but was not set to clear it after a new search. Similarly, nothing clears out both the search results and error when query is emptied again
How i fixed it - Added  setSearchResults([]) and setError(null) to clear out previous search results and error respectively when search query is emptied out. Also added setSearchResults([]) to the catch(err) to cancel out stale errors on new search



MODIFICATION
#1 - The "Add To Watchist" button was modified to change its background to green and text to "Added" when clicked to add movie to watchlist
#2 - Added a movie detail page to show a detailed information of a movie selected
#2 - The poster on the movie card was modified to change its opacity on hover and clickable. The movie card on click links to the movie detail page to show more details of the movie



AI USAGE
Major AI companinons - ClaudeAI, Git CoPilot  and Google.s Gemini
My major prompts are to ask Claude to search for error and likely solutions. Germini is simply for research and study of features used or to be used. CoPilot did othr fixs which were overlook and added suggested coded with I either accepted or rejected


FUTHER MODIFICATIONS
#1 - The movie details page was further modified to have the movie description align at the centre with an addition of the Add to WatchList button and Remove from WatchList button
#2 - A sliding carousel of Trending Movies was added