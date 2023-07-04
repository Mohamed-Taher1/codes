#include <iostream>
#include <set>
#include <utility>
using namespace std;
int main() {
    set<pair<int,string> > s; -s.insert(std::pair<int,string>(123,"Gammal"));
    s.insert(std::pair<int,string>(567,"Tech"));
    s.insert(std::pair<int,string>(111,"www."));
    set<pair<int,string> >::iterator it;
    for(it=s.begin();it!=s.end();it++)
        cout<<(*it).first<<" "<<(*it).second<<endl;
}
