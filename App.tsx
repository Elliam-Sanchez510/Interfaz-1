import { ScrollView, StyleSheet, Text, View, TextInput, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fontisto } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MaterialCommunityIcons
          style={styles.BotonRetroceder}
          name='arrow-left'
        />
        <View style={styles.IconsHeader}>
          <MaterialCommunityIcons
            style={styles.Icons}
            name='bell-outline'
          />
          <MaterialCommunityIcons
            style={styles.Icons}
            name='account-circle'
          />
          <Ionicons
            style={styles.Icons}
            name='md-reorder-three-outline'
          />
        </View>

        <View style={styles.Header}>
          <View style={styles.people}>
            <FontAwesome5 name="user-circle"
              style={styles.Contact}
            />
            <TextInput
              style={styles.TextInput}
              placeholder='Add a Comment ...'
            />

            <Entypo name="emoji-happy"
              style={styles.Emoji}
            />
            <Ionicons name="md-send"
              style={styles.IconEnviar}
            />
          </View>

          <View>
            <Text style={styles.Textcoment}> 87 Comments</Text>
          </View>

          <View style={styles.people}>

            <MaterialCommunityIcons
              style={styles.PeopleComent}
              name='account-circle-outline'
            />
            <Text style={styles.NomComent}>David Green . 20 Apr.2021</Text>
          </View>

          <View style={styles.Comentarios}>
            <Text style={styles.Comentarios}>
              😊😉Lorem ipsum dolor sit, amet adipisicing elit.
              Nihil provident distinctio aut. Inventore.
              provident distinctio aut. Inventore
              Nihil provident distinctio aut. Inventore.
            </Text>
            <View style={styles.line}>
            </View>
          </View>

          <View style={styles.people}>
            <MaterialCommunityIcons
              style={styles.PeopleComent}
              name='account-circle-outline'
            />
            <Text style={styles.NomComent}>Michael Ganri . 20 Apr.2021</Text>
          </View>

          <View style={styles.Comentarios}>

            <Text style={styles.Comentarios}>
              Lorem ipsum dolor sit, amet adipisicing elit.
              Nihil provident distinctio aut. Inventore,
              Lorem ipsum dolor sit, amet adipisicing elit.
            </Text>
            <View style={styles.line}>
            </View>
          </View>

          <View style={styles.people}>
            <MaterialCommunityIcons
              style={styles.PeopleComent}
              name='account-circle-outline'
            />
            <Text style={styles.NomComent}>Kim Dranco . 20 Apr.2021</Text>
          </View>

          <View style={styles.Comentarios}>
            <Text style={styles.Comentarios}>
              Lorem ipsum dolor sit, amet adipisicing elit.
              Nihil  provident distinctio aut. Inventore,
              nihil. Repudiandae ex hic vero esse, aliquid nobis
            </Text>
            <View style={styles.line}>
            </View>
          </View>

          <View style={styles.people}>
            <MaterialCommunityIcons
              style={styles.PeopleComent}
              name='account-circle-outline'
            />
            <Text style={styles.NomComent}>Scot Donavan . 20 Apr.2021</Text>
          </View>

          <View style={styles.Comentarios}>
            <Text style={styles.Comentarios}>
              Lorem ipsum dolor sit, amet adipisicing elit.
              Nihil  provident distinctio aut. Inventore,
              nihil. Repudiandae ex hic vero esse, aliquid nobis
            </Text>
            <View style={styles.line}>
            </View>

            <View style={styles.people}>
              <MaterialCommunityIcons
                style={styles.PeopleComent}
                name='account-circle-outline'
              />
              <Text style={styles.NomComent}>Michael Ganri . 20 Apr.2021</Text>
            </View>
            
            <View style={styles.Comentarios}>
              <Text style={styles.Comentarios}>
                Lorem ipsum dolor sit, amet adipisicing elit.
                Nihil provident distinctio aut. Inventore,
                Lorem ipsum dolor sit, amet adipisicing elit.
              </Text>
              <View style={styles.line}>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.FinalIcons}>
          <MaterialCommunityIcons name="home"
            style={styles.Footer}
          />
          <MaterialIcons name="featured-play-list"
            style={styles.Footer}
          />
          <FontAwesome5 name="book-open"
            style={styles.Footer}
          />
          <Ionicons name="people"
            style={styles.Footer}
          />
          <Fontisto name="favorite"
            style={styles.Footer}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28333F',
  },
  Header: {
    backgroundColor: '#2F3C50',
    marginTop: 20,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  BotonRetroceder: {
    fontSize: 30,
    color: '#E6E6E6',
    padding: 10
  },
  IconsHeader: {
    flexDirection: 'row',
    backgroundColor: '#28333F',
    justifyContent: 'space-between',
    paddingLeft: '55%',
    padding: 15
  },
  Contact: {
    color: '#6880FF',
    fontSize: 40,
  },
  Emoji: {
    color: '#6880FF',
    backgroundColor: '#2E3B4D',
    position: "absolute",
    top: 20,
    left: 255,
    zIndex: 2,
    fontSize: 22,
    borderRadius: 5,
    paddingRight: 8,
    paddingLeft: 8,
    paddingVertical: 7
  },
  IconEnviar: {
    position: "absolute",
    top: 20,
    left: 300,
    zIndex: 2,
    fontSize: 22,
    color: '#E6E6E6',
    backgroundColor: '#677FFF',
    borderRadius: 5,
    paddingRight: 8,
    paddingLeft: 8,
    paddingVertical: 6
  },
  Icons: {
    fontSize: 30,
    color: '#AEA8B3',
  },
  TextInput: {
    backgroundColor: '#4B576B',
    color: '#E6E6E6',
    borderWidth: 1,
    padding: 10,
    paddingStart: 10,
    width: '70%',
    borderRadius: 10,
    marginHorizontal: '10%',
    borderColor: '#4B576B',
  },
  Textcoment: {
    color: '#fff',
    paddingStart: 20,
  },
  PeopleComent: {
    fontSize: 30,
    color: 'white',
  },
  NomComent: {
    fontSize: 17,
    color: 'white',
    paddingStart: 20,
  },
  Comentarios: {
    paddingStart: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 5
  },
  people: {
    flexDirection: 'row',
    padding: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  Footer: {
    fontSize: 30,
    color: 'gray'
  },
  FinalIcons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    height: 35,
    marginTop: 35,
  }
});
