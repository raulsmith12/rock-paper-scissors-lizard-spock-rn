import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native';

const App = () => { 
  const [message, setMessage] = useState('Rock, Paper, Scissors, Lizard, Spock?');
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const playMove = (play) => {
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const compPlay = moves[Math.floor(Math.random()*moves.length)];

    switch(play) {
      case 'rock':
        if (compPlay == 'lizard' || compPlay == 'scissors') {
          setMessage(`You win! ${play} beats ${compPlay}!`)
          setPlayerScore(playerScore + 1);
          if (playerScore >= 6) {
            setWinner(playerScore + 1, compScore)
          }
        } else if (compPlay == 'paper' || compPlay == 'spock') {
          setMessage(`You lose! ${compPlay} beats ${play}!`)
          setCompScore(compScore + 1);
          if (compScore >= 6) {
            setWinner(playerScore, compScore + 1)
          }
        } else if (compPlay == 'rock') {
          setMessage('Draw! Try again!')
        }
        break;
      case 'paper':
        if (compPlay == 'rock' || compPlay == 'spock') {
          setMessage(`You win! ${play} beats ${compPlay}!`)
          setPlayerScore(playerScore + 1);
          if (playerScore >= 6) {
            setWinner(playerScore + 1, compScore)
          }
        } else if (compPlay == 'scissors' || compPlay == 'lizard') {
          setMessage(`You lose! ${compPlay} beats ${play}!`)
          setCompScore(compScore + 1);
          if (compScore >= 6) {
            setWinner(playerScore, compScore + 1)
          }
        } else if (compPlay == 'paper') {
          setMessage('Draw! Try again!')
        }
        break;
      case 'scissors':
        if (compPlay == 'paper' || compPlay == 'lizard') {
          setMessage(`You win! ${play} beats ${compPlay}!`)
          setPlayerScore(playerScore + 1);
          if (playerScore >= 6) {
            setWinner(playerScore + 1, compScore)
          }
        } else if (compPlay == 'rock' || compPlay == 'spock') {
          setMessage(`You lose! ${compPlay} beats ${play}!`)
          setCompScore(compScore + 1);
          if (compScore >= 6) {
            setWinner(playerScore, compScore + 1)
          }
        } else if (compPlay == 'scissors') {
          setMessage('Draw! Try again!')
        }
        break;
      case 'lizard':
        if (compPlay == 'paper' || compPlay == 'spock') {
          setMessage(`You win! ${play} beats ${compPlay}!`)
          setPlayerScore(playerScore + 1);
          if (playerScore >= 6) {
            setWinner(playerScore + 1, compScore)
          }
        } else if (compPlay == 'rock' || compPlay == 'scissors') {
          setMessage(`You lose! ${compPlay} beats ${play}!`)
          setCompScore(compScore + 1);
          if (compScore >= 6) {
            setWinner(playerScore, compScore + 1)
          }
        } else if (compPlay == 'lizard') {
          setMessage('Draw! Try again!')
        }
        break;
      case 'spock':
        if (compPlay == 'rock' || compPlay == 'scissors') {
          setMessage(`You win! ${play} beats ${compPlay}!`)
          setPlayerScore(playerScore + 1);
          if (playerScore >= 6) {
            setWinner(playerScore + 1, compScore)
          }
        } else if (compPlay == 'paper' || compPlay == 'lizard') {
          setMessage(`You lose! ${compPlay} beats ${play}!`)
          setCompScore(compScore + 1);
          if (compScore >= 6) {
            setWinner(playerScore, compScore + 1)
          }
        } else if (compPlay == 'spock') {
          setMessage('Draw! Try again!')
        }
        break;
    }
  }

  const setWinner = (player1, player2) => {
    if (player1 < player2) {
      Alert.alert(
        `You lose ${player2} to ${player1}!`,
        "Play again?",
        [
          {
            text: 'OK',
            onPress: () => clearAll()
          }
        ]
      )
    } else if (player1 > player2) {
      Alert.alert(
        `You win ${player1} to ${player2}!`,
        "Play again?",
        [
          {
            text: 'OK',
            onPress: () => clearAll()
          }
        ]
      )
    }
  }

  const clearAll = () => {
    setMessage('Rock, Paper, Scissors, Lizard, Spock?')
    setCompScore(0)
    setPlayerScore(0)
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={{ flex: 1, alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 16 }}>
            {`
              Your Score:
              ${playerScore}
            `}
          </Text>
        </View>
        <View style={{ flex: 2, alignSelf: 'flex-start', justifyContent: 'center' }}>
          <Text style={styles.titleHeader}>
            {message}
          </Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 16 }}>
            {`
              Computer:
              ${compScore}
            `}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', marginTop: -190 }}>
        <TouchableOpacity style={styles.button1} onPress={() => playMove('rock')}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => playMove('paper')}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => playMove('scissors')}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Scissors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => playMove('lizard')}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Lizard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button5} onPress={() => playMove('spock')}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Spock</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    width: vw - 20,
    height: vh,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 25,
    marginBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleHeader: {
    fontSize: vw / 30,
    color: 'red',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: '#444',
  },
  button1: {
    alignSelf: 'stretch',
    fontSize: vw / 14,
    padding: 15,
    borderRadius: 15,
    color: '#ffffff',
    backgroundColor: '#232324',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    width: vw - 68,
  },
  button2: {
    alignSelf: 'stretch',
    fontSize: vw / 14,
    padding: 15,
    borderRadius: 15,
    color: '#ffffff',
    backgroundColor: '#797879',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    width: vw - 68,
  },
  button3: {
    alignSelf: 'stretch',
    fontSize: vw / 14,
    padding: 15,
    borderRadius: 15,
    color: '#ffffff',
    backgroundColor: '#ac0302',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    width: vw - 68,
  },
  button4: {
    alignSelf: 'stretch',
    fontSize: vw / 14,
    padding: 15,
    borderRadius: 15,
    color: '#ffffff',
    backgroundColor: '#02aa02',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    width: vw - 68,
  },
  button5: {
    alignSelf: 'stretch',
    fontSize: vw / 14,
    padding: 15,
    borderRadius: 15,
    color: '#ffffff',
    backgroundColor: '#0000ff',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    width: vw - 68,
  },
});

export default App;