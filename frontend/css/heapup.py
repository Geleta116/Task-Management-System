def heappush(heap,value):
      heap.append(value)
      current = len(heap) - 1
      heapify_up(heap,current)
      
def heapify_up(heap,current):
      while current > 0 and heap[current] < heap[(current - 1)//2]:
            temp = (current - 1) // 2
            heap[temp], heap[current]  =   heap[current] , heap[temp]
            current = temp
      return heap
def heappop(heap):
      if not heap:
            return None
      min_value = heap[0]
      heap[0] = heap[-1]
      heap.pop()
      current = 0
      heapify_down(heap,len(heap),current)
      return min_value

def heapify_down(arr, n, current):
      
      while current < n :
            left = 2 * current + 1
            right = 2 * current + 2
            
            
            if righarr[right] >= arr[left] and arr[current] > arr[left]:
                  arr[current], arr[left] = arr[left], arr[current]
                  current = left
            elif arr[left] >= arr[right] and arr[current] > arr[left]:
                  arr[current], arr[right] = arr[right], arr[current]
                  current = right
            else:
                  return arr
                  
      

def test():
      heap = [2, 4, 5, 7, 9, 10]
      min_val = heappop(heap)
      assert min_val == 2, f"Error: expected 2, but got {min_val}"
      assert heap == [4, 7, 5, 10, 9], f"Error: expected [4, 7, 5, 10, 9], but got {heap}"
      
      heap = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      min_val = heappop(heap)
      assert min_val == 1, f"Error: expected 1, but got {min_val}"
      assert heap == [2, 4, 3, 8, 5, 6, 7, 9], f"Error: expected [2, 4, 3, 8, 5, 6, 7, 9], butgot {heap}"
 
      print("Great Job !!!")
test()