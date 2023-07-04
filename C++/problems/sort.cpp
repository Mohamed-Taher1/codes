#include <algorithm>
#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int main() {
  vector<int> x,y;
  int v;
  for(int i = 0;i<3;i++){
    cin>>v;
    x.push_back(v);
    }
  y=x;
  sort(x.begin(),x.end());
  for(int i = 0;i<3;i++)
    cout<<x[i]<<endl;
  cout<<endl;
  for(int i = 0;i<3;i++)
    cout<<y[i]<<endl;
  
}