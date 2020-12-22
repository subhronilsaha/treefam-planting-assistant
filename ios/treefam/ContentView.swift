//
//  ContentView.swift
//  treefam
//
//  Created by Subhronil Saha on 20/11/20.
//

import SwiftUI

struct ContentView: View {
    
    @State var selection = 0
    
    var body: some View {
        TabView(selection: $selection) {
            HomeView(selection: $selection)
                .tabItem {
                    VStack {
                        Image(systemName: "house.fill")
                        Text("Home")
                    }
                }
                .tag(0)
            
            MapView()
                .tabItem {
                    VStack {
                        Image(systemName: "map.fill")
                        Text("Map")
                    }
                }
                .tag(1)
                .animation(.spring())
            
            MyPlantsView()
                .tabItem {
                    VStack {
                        Image(systemName: "leaf.arrow.circlepath")
                        Text("My Plants")
                    }
                }
                .tag(2)
            
            ProfileView()
                .tabItem {
                    VStack {
                        Image(systemName: "person.fill")
                        Text("Profile")
                    }
                }
                .tag(3)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
