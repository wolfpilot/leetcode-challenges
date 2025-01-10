import math

from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + math.floor((right - left) / 2)

            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1

        '''
        Normally here we would return the mid, however since:

        a) We're either finding the target as the mid.
        b) Or exiting the loop when none is found.

        when scenario b) is reached, left will have already been incremented
        to where the target would have normally been at.
        '''             

        return left
    
sol = Solution()

'''
Time complexity: O(log n)
Space complexity: O(1)
'''

print(sol.searchInsert([1, 3, 5, 6], 5))
print(sol.searchInsert([1, 3, 5, 6], 2))
print(sol.searchInsert([1, 3, 5, 6], 7))
