# Problem Description
Given two strings s1 and s2, check if they are anagrams. Two strings are anagrams if they are made of the same characters with the same frequencies. 

anagram - a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

### Related Topics:
* Hash Table
* Sort

### Solution 1 - Character Map Comparison
Since we know the two strings are anagrams if they have the same characters with same frequencies, so we can calculate the frequencies of each character of s1, calculate the frequencies of each character of s2, and then compare the results. 

The best data structure for this problem is hash table that maps unique keys to values. In this case, the key will be the character and the value will be the number of the frequencies. 

For example: 
input: s1 = "garden", s2 = "danger"
freq1 = {
    'g': 1,
    'a': 1,
    'r': 1,
    'd': 1,
    'e': 1,
    'n': 1
} 
freq2 = {
    'd': 1,
    'a': 1,
    'n': 1,
    'g': 1,
    'e': 1,
    'r': 1
}

freq1 = freq2 => s1 and s2 are anagrams

### Big O 
* Space Complexity - S(n) = 2n = O(n)
* Time Complexity : O(n) => T(n) = O(nlogn) + O(nlogn) + n
