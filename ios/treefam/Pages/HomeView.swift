//
//  HomeView.swift
//  treefam
//
//  Created by Subhronil Saha on 20/11/20.
//

import SwiftUI

struct HomeView: View {
        
    @Binding var selection : Int
    @State var prog : CGFloat = 0
    
    var body: some View {
        NavigationView {
            List {
                VStack {
                    HStack() {
                        Text("Trees planted: \(Int(self.prog))")
                        Spacer()
                        Text("Target: 10")
                    }
                    
                    CustomProgressView(progress: self.prog, target: 10.0)
                        .animation(.spring())
                    
                }.padding(.horizontal, -3)
                
                // Map View
                VStack(alignment: .trailing) {
                    MapView()
                        .frame(height: 300)
                        .clipShape(RoundedRectangle(cornerRadius: 10.0))

                    
                    Button(action: {
                        if(self.prog < 10) {
                            self.prog += 1
                        }
                        self.selection = 1
                    }) {
                        ZStack {
                            Text("Plant a Tree")
                                .padding()
                                .foregroundColor(.white)
                                .background(Color("Primary-Green"))
                                .clipShape(RoundedRectangle(cornerRadius: 10))
                        }
                    }
                    
                }
                
                
            }.navigationTitle("Hi, Subhronil")
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView(selection: .constant(0))
    }
}

// Progress Bar
struct CustomProgressView : View {
    
    var progress : CGFloat
    var target : CGFloat
    
    var body : some View {
        ZStack(alignment: .leading) {
            ZStack {
                Capsule()
                    .fill(Color.black.opacity(0.2))
                    .frame(height: 15, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                    .padding(0)
            }
            
            Capsule()
                .fill(Color("Primary-Green"))
                .frame(width: calculateWidth(), height: 15, alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/)
                .padding(0)
        }
    }
    
    func calculateWidth() -> CGFloat? {
        let screenWidth = UIScreen.main.bounds.width - 35
        let percent = CGFloat(self.progress / self.target)
        let reqWidth = screenWidth * percent
        print(self.progress, self.target)
        print("\nPercent : \n", percent)
        print("\nRequired width : \n", reqWidth)
        return reqWidth
//        return screenWidth
    }
}



