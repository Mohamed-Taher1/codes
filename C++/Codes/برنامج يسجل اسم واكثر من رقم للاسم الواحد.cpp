#include <algorithm>
#include <iostream>
#include <stdio.h>
#include <vector>
#include <set>
#include <string>
#include <utility>
#include <math.h>
using namespace std;

int main(){

  set<pair<string,vector<int> > > s;
  set<pair<string,vector<int> > >::iterator it;

  for(int i=0;i<3;i++){
    pair<string,vector<int> > p;
    cout<<"Enter Name : ";
    cin>>p.first;
    more:
    int t;
    cout<<"Enter a Number : ";
    cin>>t;
    if(t){
      p.second.push_back(t);
      goto more;
    }
    s.insert(p);
    
    for(it=s.begin();it != s.end();it++){
      cout<<(*it).first<<endl;
      for(int j=0;j<(*it).second.size();j++)
        cout<<"\t"<<(*it).second[j]<<endl;
      
    }
  }
  

  
  


    
    


}
