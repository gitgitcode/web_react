package main

import (
	trippb "coolcar/proto/gen/go"
	"encoding/json"
	"fmt"

	"google.golang.org/protobuf/proto"
)

func main() {
	loc := trippb.Location{
		Latidue:   1.1,
		Longitude: 2.2,
	}
	trip2 := trippb.Trip{
		Start:       "abc",
		StartPos:    &loc,
		DurationSec: 0,
		FeeCent:     123,
		PathLocations: []*trippb.Location{
			&loc,
			{
				Latidue:   12.3,
				Longitude: 456.12,
			},
		},
		End: "123",
		EndPos: &trippb.Location{
			Latidue:   212.3,
			Longitude: 46.12,
		},
		Status: trippb.TripStatus_IN_PROGRESS,
	}
	fmt.Println(&trip2)
	b, err := proto.Marshal(&trip2)
	if err != nil {
		panic(err)
	}
	fmt.Printf("x==>%X \n", b)
	err = proto.Unmarshal(b, &trip2)
	if err != nil {
		panic(err)
	}

	fmt.Println("===>", &trip2)
	b1, err := json.Marshal(&trip2)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(b1))
}
