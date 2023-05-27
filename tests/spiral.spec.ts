import spiral from '../src/spiral'

describe('Test Archmedian Spiral Array', ()=> {
    it('should return an array', ()=> {
        const received = spiral(3)
        expect(Array.isArray(received)).toBe(true)
    })
    it('should return 3 sub arrays given 3 as argument', ()=> {
        const received = spiral(3)
        expect(received.length).toEqual(3)
    })
    it('should return [8,9,4] in the second sub array, given 3 as argument', ()=> {
        const received = spiral(3)
        expect(received[1]).toEqual([8,9,4])
    })
    it('should return [14,23,22,21,8] in the 4th sub array, given 5 as argument', ()=> {
        const received = spiral(5)
        expect(received[3]).toEqual([14,23,22,21,8])
    })
    it('should return the correct 6th sub array given 99 as argument', ()=> {
        const received = spiral(99)
        expect(received[5]).toEqual([
            388,  773, 1150, 1519, 1880, 1881, 1882, 1883, 1884,
           1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893,
           1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902,
           1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911,
           1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920,
           1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929,
           1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938,
           1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947,
           1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956,
           1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965,
           1966, 1967, 1968, 1969, 1612, 1247,  874,  493,  104
         ])
    })
})