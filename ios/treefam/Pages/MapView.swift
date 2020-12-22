//
//  MapView.swift
//  treefam
//
//  Created by Subhronil Saha on 20/11/20.
//

import SwiftUI
import MapKit
import CoreLocation

struct MapView: View {
    
    let locationFetcher = LocationFetcher()
    
    @State var treesPlanted = [TreePin(name: "John", latitude: 56.948889, longitude: 24.106389)]
        
    @State var coordinateRegion = MKCoordinateRegion(
      center: CLLocationCoordinate2D(latitude: 56.948889, longitude: 24.106389),
      span: MKCoordinateSpan(latitudeDelta: 0.2, longitudeDelta: 0.2))
    
    var body: some View {
        ZStack {
            Map(coordinateRegion: $coordinateRegion,
                annotationItems: treesPlanted) { place in
              MapPin(coordinate: place.coordinate, tint: .green)
            }
            .edgesIgnoringSafeArea(.all)
            .onAppear {
                self.locationFetcher.start()
                
                if let location = self.locationFetcher.lastKnownLocation {
                    self.coordinateRegion.center = location
                    self.treesPlanted.append(TreePin(name: "Subhronil", latitude: location.latitude, longitude: location.longitude))
                } else {
                    print("Your location is unknown")
                }
            }
        }
        
    }
}

struct MapView_Previews: PreviewProvider {
    static var previews: some View {
        MapView()
    }
}

// Corelocation Location fetcher
class LocationFetcher: NSObject, CLLocationManagerDelegate {
    let manager = CLLocationManager()
    var lastKnownLocation: CLLocationCoordinate2D?

    override init() {
        super.init()
        manager.delegate = self
    }

    func start() {
        manager.requestWhenInUseAuthorization()
        manager.startUpdatingLocation()
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        lastKnownLocation = locations.first?.coordinate
    }
}

struct TreePin : Identifiable {
    var id = UUID()
    let name: String
    let latitude: Double
    let longitude: Double
        
    var coordinate: CLLocationCoordinate2D {
        CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
    }
}
