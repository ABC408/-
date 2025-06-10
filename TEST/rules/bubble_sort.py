def bubble_sort(arr):
    n = len(arr)
    # 遍历所有数组元素
    for i in range(n):
        # 最后i个元素已经排好序，相当于每一轮将较大的元素移到末尾
        for j in range(0, n-i-1):
            # 如果当前元素大于下一个元素，则交换这两个元素
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# 测试代码
if __name__ == "__main__":
    # 定义一个测试数组
    test_array = [64, 34, 25, 12, 22, 11, 90]
    # 打印排序前的数组
    print("排序前:", test_array)
    # 调用bubble_sort函数对测试数组进行排序
    sorted_array = bubble_sort(test_array)
    # 打印排序后的数组
    print("排序后:", sorted_array)